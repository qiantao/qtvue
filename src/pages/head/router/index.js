import Vue from 'vue'
import Router from 'vue-router'
import Main from "../submod/Main";
import EmptyMain from "../EmptyMain";
import Photo from "../submod/Photo";
import Order from "../submod/Order";
import Customers from "../submod/Customers";
import Calendar from "../submod/Calendar";
import Fontawesome from "../submod/Fontawesome";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmptyMain',
      component: EmptyMain
    },
    { path: '/main', name:'main',component: Main },
    { path: '/photo', name:'Photo',component: Photo },
    { path: '/order', name:'Order',component: Order },
    { path: '/customers', name:'Customers',component: Customers },
    { path: '/calendar', name:'Calendar',component: Calendar },
    { path: '/fontawesome', name:'Fontawesome',component: Fontawesome },

  ]
})
