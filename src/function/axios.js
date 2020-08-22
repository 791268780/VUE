import {axios, axios_get_config } from '../config/index'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
// const nexttimeout = Symbol('nexttimeout')
let nexttimeout = null;

class Axios{
    all(arr) {
        if (typeof(arr) !== 'object') {
            arr = [arr];
        }
       let arr1 = [];
        for(let i=0;i<arr.length;i++) {
            arr1.push(axios({
                url:arr[i].url,
                method:arr[i].method,
                ...axios_get_config
            }));
        }
        return axios.all(arr1)
    }

    intvalAxios (arr, Intvaltime=1170, time = 5) { // 连续请求
         return new Promise((resolve, reject) => {
            let intval = setInterval(() => {
                let promiss_res = this.all(arr);
                time--;
                console.log(promiss_res)
                console.log(`请求剩余${time}次`);
                promiss_res.then((res)=>{
                    if(res || time <= 0 ) {  // 判断数据不为空

                        clearInterval(intval)
                        if( res ) {
                            resolve(res);
                            return;
                        }
                        resolve('请求数据为空');
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

    timeoutAxios (arr,Intvaltime=1000) { // 延迟请求
        // console.log(nexttimeout)
        clearTimeout(nexttimeout);
        return new Promise((resolve, reject) => {
            let timeout = setTimeout(() => {
                let promiss_res = this.all(arr);
                promiss_res.then((res)=>{
                    if(res) {  // 判断数据不为空
                            resolve(res);
                            return;
                    }
                    resolve('请求数据为空');
                }).catch((err)=>{
                    console.log(err)
                })
            }, 
            Intvaltime
            )
            nexttimeout = timeout;
        })
    }
    
}

export default new Axios;