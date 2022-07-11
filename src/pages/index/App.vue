<template>
  <div id="app">
    <img src="./assets/logo.png" @click="head">
    <router-view/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld";
export default {
  name: 'App',
  components:{
    HelloWorld
  },
  methods:{
    head(){
      // this.$router.push({ path:'/'  })
      window.location="head.html"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
