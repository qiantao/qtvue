<template>
  <div id ='photo'>
    <div id="box" onclick="playMusic()">
      <img src="static/image/head/1.jpeg"/>
      <img src="static/image/head/2.jpeg"/>
      <img src="static/image/head/3.jpeg"/>
      <img src="static/image/head/4.jpeg"/>
      <img src="static/image/head/5.jpeg"/>
      <img src="static/image/head/6.jpeg"/>
      <img src="static/image/head/7.jpeg"/>
      <img src="static/image/head/8.jpeg"/>
      <img src="static/image/head/9.jpeg"/>
      <img src="static/image/head/10.jpeg"/>
    </div>
    <!--		<embed src="music/1.mp3" width="0px" height="0px" t‰ype="audio/mpeg" loop=true autostart=true id="bg-music">-->
    <audio autoplay="autoplay" controls="controls" loop="loop" id="bg-music" width="0px" height="0px" hidden="true">
      <source src='static/music/1.mp3' type="audio/mpeg"></source>
    </audio>
  </div>
</template>

<script>
export default {
  name: "Photo",
  methods: {
     back(){
      window.history.go(-1);
    }
  },
  mounted() {
    let oimg=box.getElementsByTagName("img");
    for(var i=0;i<oimg.length;i++){
      oimg[i].style.cssText="transform:rotateY("+i*36+"deg) translateZ(500px)";
    }
  }
}
</script>

<style scoped>
/**{*/
/*  margin:0;*/
/*  padding: 0;*/
/*}*/
#photo {
  top: 50px;
  left: 140px;
  /*background-color: #0c0c0c;*/
  height: 100%;
  width: 100%;
  z-index: 96;
  position: fixed;
  background: url(../assets/bg.jpeg) no-repeat;

}
#box{
  background: url(../assets/touxiang.jpeg) no-repeat center;
  background-size:100% 100%;
  width:300px;
  height:200px;
  /*margin:180px auto;*/
  margin: 180px auto ;
  top:50px;
  transform-style:preserve-3d ;/*子元素旋转父元素加上   为子元素声明3D空间*/
  position: relative;
  transform-origin: center;/*设置旋转中心点*/
  animation: move 14s linear infinite;
}
#box img {
  position: absolute;
  width: 250px;
  height: 300px;

}
@keyframes move{
  0%{transform: rotateY(0deg) rotateX(0deg) ;}
  25%{transform: rotateY(180deg) rotateX(20deg) ;}
  50%{transform: rotateY(360deg) rotateX(0deg) ;}
  75%{transform: rotateY(540deg) rotateX(-20deg) ;}
  100%{transform: rotateY(720deg) rotateX(0deg) ;}
}
/*#box img:nth-child(1){
  transform: rotateY(360deg);
}*/
</style>