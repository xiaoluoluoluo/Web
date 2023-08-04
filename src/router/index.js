import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../components/Top.vue'
import Main from '../components/Main.vue'
import Photo from '../components/Photo.vue'
import Character from '../components/Character.vue'
import Sign from '../components/Sign.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/top',
      component:Top
    },
    {
      path:'/main',
      component:Main,

    },
    {
      path:'/photo',
      component:Photo,

    },
    {
      path:'/character',
      component:Character,

    },
    {
      path:'/sign',
      component:Sign,

    },
    {
      path:'/login',
      component:Login,

    },
    {
      path:'/',
      redirect:'/Main',

    },
  ]
})


