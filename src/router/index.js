import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jink from '@/components/Jink'
import Harm from '@/components/Harm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/jink',
      name:'Jink',
      component:Jink
    },
    {
      path:'/harm',
      name:'Harm',
      component:Harm
    }
  ]
})
