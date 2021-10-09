// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Head from './Head.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var home = new Vue({
    el: '#head',//html中的id为home的div
    router,
    components: { Head },
    template: '<Head/>'
})


