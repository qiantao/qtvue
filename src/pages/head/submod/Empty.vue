<template>
  <div id="empty">
    <div class="page-wrapper">
      <div class="main-content">
        <div class="emptyRow"></div>
        <p>ssssssssssss<input type="text" class="e-txt" >
          <button data-v-fa11bb4a="" type="button" class="btn btn-primary squer-btn sm-btn" v-on:click="a">submit</button></p>
        <div class="qtdis" id="qtdis" hidden></div>
          <div class="qttablediv">
            <table>
              <tr data-v-00e4d7ba>
                <td class="qttd" v-on:mouseover="b" v-on:mouseleave="c" >1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
              </tr>
              <tr>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
                <td class="qttd">1</td>
              </tr>
            </table>
          </div>
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
    },
    b(){
      // alert("345")
      let elementById = document.getElementById("qtdis");
      elementById.hidden = false;
      // elementById.setAttribute("visibility","hidden")
    }
    ,
    c(){
      let elementById = document.getElementById("qtdis");
      // elementById.setAttribute("visibility","visible")
      elementById.hidden = true;
    }
  },
  mounted() {
    // alert("456")
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
.qttd{
  border: 1px solid var(--border-color);
  border-left: 0;
  border-right: 0;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 3%);
  vertical-align: middle;
}
.qttablediv{
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.qtdis{
  background-color: blue;
  /*background: var(--white);*/
  border-radius:10px;/*四角圆*/
  opacity:0.5;/*opacity 用于指定元素透明度, 支持 0~1 之间的小数.默认值 1-完全不透明, 0-完全透明*/
  visibility:visible;
  width: 100px;
  height: 100px;
  position: fixed;
  margin-left: 100Px;
  margin-top: 100px;

  /*display: none;*/
}
</style>