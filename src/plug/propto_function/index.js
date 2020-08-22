import {
    Bus,
} from '../../config/index'

import Axios from '../../function/axios'
import AutioVoice from '../../function/Autio_voice'
import refGetDom from '../../function/ref_get_dom'

let MyFunction = {};

MyFunction.install = function (Vue, options) {

    // 4. 添加实例方法
    Vue.prototype.axios = Axios;
    Vue.prototype.bus = Bus;
    Vue.prototype.AutioVoice = AutioVoice;
    Vue.prototype.refGetDom = refGetDom;
  }


  export default MyFunction;