import MyFunction from './propto_function/index'
import MyDirective from './directive/index'
import MyMixin from './mixin/index'

let MyPlugin = {};

MyPlugin.install = function (Vue, options) {
  
    // 2. 添加全局资源
    Vue.use(MyDirective);
  
    // 3. 注入组件选项
    Vue.use(MyMixin)
  
    // 4. 添加实例方法
    Vue.use(MyFunction)
  }


  export default MyPlugin;