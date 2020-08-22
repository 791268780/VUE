import axios from 'axios'
import Router from '../../router/index'

// axios.defaults.baseURL='http://localhost:3000'



axios.interceptors.request.use(function (config) { //请求拦截
    // 在发送请求之前做些什么，例如加入token
    // console.log(config)
    config.headers.Authorization = '666666'
    return  config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use(function (res) { // 响应拦截
    // 在接收响应做些什么，例如跳转到登录页
    // console.log(res)
    if (res.data == 0) {
        console.log('已登陆')
    }else{
        // alert('请重新登陆！！！')
        // Router.push('/about')
    }
    return res;

  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default axios;



