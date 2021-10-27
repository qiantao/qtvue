<template>
  <div id="calendar">
    <div class="page-wrapper">
      <div class="main-content">
        <!-- Page Title Start -->
        <div class="row">
          <div class="col xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="page-title-wrapper">
              <div class="page-title-box">
                <h4 class="page-title">Calendar</h4>
              </div>
              <div class="breadcrumb-list">
                <ul>
                  <li class="breadcrumb-link">
                    <a href="javascript:void(0);"><i class="fas fa-home mr-2"></i>Dashboard</a>
                  </li>
                  <li class="breadcrumb-link active">Calendar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Products view Start -->
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="card table-card">
              <div class="card-body">
                <div class="calendar-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="ad-footer-btm">
          <p>Copyright &copy; 2021.Company name All rights reserved.<a target="_blank" href="https://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar"
}
</script>

<style scoped>
.page-wrapper{
  z-index: 1;
}
#calendar{
  top:0px;
  left: 0px;
  /*left: -280px;*/
  height: 100%;
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>