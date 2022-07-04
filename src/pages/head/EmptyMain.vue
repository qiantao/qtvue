<template>
  <div id = "emptyMain">
    <router-view></router-view>
  </div>
</template>

<script>
import Main from "./submod/Main.vue";
export default {
  name: "EmptyMain",
  components:{
    Main
  }
}

</script>

<style scoped>
#emptyMain{
  /*position: fixed;*/
  left: 280px;
  height: 100%;
  width: 100%;
  /*z-index: -1000;*/
  /*background-color: #9f9f20;*/

}
.p1{
  margin-left: 200px;
  padding-top:100px;
  padding-left: 500px;
}
</style>