
let MyMixin = {};

MyMixin.install = function (Vue, options) {
  
    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        console.log('全局mixin')
      },
      methods: {
          b() {
              console.log('全局m')
          }
      },
    
    })
  
    
  }


  export default MyMixin;