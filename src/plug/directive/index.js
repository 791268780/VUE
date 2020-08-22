
let MyDirective = {};

MyDirective.install = function (Vue, options) {
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
    
    })
  
   
  }


  export default MyDirective;