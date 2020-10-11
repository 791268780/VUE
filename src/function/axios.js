import {axios, axios_get_config } from '../config/index'

import qs from 'qs'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
// const nexttimeout = Symbol('nexttimeout')
let nexttimeout = null;

class Axios{
    intvalAxios (arr, Intvaltime=1170, time = 5) { // 连续请求
         return new Promise((resolve, reject) => {
            let intval = setInterval(() => {
                let promiss_res = this.all(arr);
                time--;
                console.log(promiss_res)
                console.log(`请求剩余${time}次`);
                promiss_res.then((res)=>{
                    if(res.length > 0 || time <= 0 ) {  // 判断数据不为空
                        clearInterval(intval)
                        if( res.length > 0 ) {
                            resolve(res);
                            return;
                        }
                        resolve({});
                    }
                }).catch((err)=>{
                    clearInterval(intval)
                    console.log(err)
                })
                
            }, 
            Intvaltime
            )
        })
    }

    // constructor(a) {
    //     // 利用symbol声明私有变量
    //     this[nexttimeout] = a
    // }

    // shownexttimeout() {
    //     return this[nexttimeout]
    // }

    timeoutAxios (arr,Intvaltime=3000) { // 延迟请求
        // console.log(nexttimeout)
        clearTimeout(nexttimeout);
        return new Promise((resolve, reject) => {
            let timeout = setTimeout(() => {
                let promiss_res = this.all(arr);
                promiss_res.then((res)=>{
                    if(res.length > 0) {  // 判断数据不为空
                            resolve(res);
                            return;
                    }
                    resolve({});
                }).catch((err)=>{
                    console.log(err)
                })
            }, 
            Intvaltime
            )
            nexttimeout = timeout;
        })
    }

    all(arr) {
        let date = [];
        return new Promise((resolve, reject) => {
            if (typeof(arr) !== 'object') {
                arr = [arr];
            }
           let arr1 = [];
            for(let i=0;i<arr.length;i++) {
                let getDate = {
                    params: arr[i].data,
                };
                if (arr[i].method == 'post') {
                    getDate = {
                        data: qs.stringify(arr[i].data),
                    }
                }
                arr1.push(axios({
                    url:arr[i].url,
                    method:arr[i].method,
                    ...getDate,
                    ...axios_get_config
                }));
            }
            axios.all(arr1).then( (res) => {
                res.forEach(data => {
                    if (data.status == 200) {
                        date.push(data.data)
                    }else{
                        date.push('请求失败')
                    }
                });
                resolve( date)
            }).catch(err=> {
                resolve( date)
            })
        })
    }
    
}

export default new Axios;