<template>
  <div id="empty">
    <div class="page-wrapper">
      <div class="main-content">
        <div class="emptyRow"></div>
        <p>ssssssssssss<input type="text" class="e-txt" > <button data-v-fa11bb4a="" type="button" class="btn btn-primary squer-btn sm-btn" v-on:click="a">submit</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "empty",
  methods:{
    a(){
      alert("123")
    }
  },
  mounted() {
    alert("456")
  }
}
</script>

<style scoped>
#empty{
  #background-color: red;
  top:0px;
  left: 0px;
  /*left: -280px;*/
  height: 100%;
  width: 100%;
  min-height: 100%;
  position: relative;
}
.emptyRow{
  height: 20px;
  width: 100%;
  min-height: 45px;
  background-color: red;
  position: relative;
}
.p1{
  margin-left: 200px;
  padding-top:100px;
  padding-left: 500px;
}
</style>