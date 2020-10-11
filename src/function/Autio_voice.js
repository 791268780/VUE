var n = new Audio();

class AutioVoice {

  Broadcast (str=null) {
    var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(str);        // baidu
    if (str == null) {
// 　　  n.src = Mp3;
    }else{
　　  n.src = url;
    }
　　n.play();

  　}
}

export default new AutioVoice;