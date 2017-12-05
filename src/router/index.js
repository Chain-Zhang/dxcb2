import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jink from '@/components/Jink'
import Harm from '@/components/Harm'
import ApiTest from '@/components/ApiTest'

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
    },
    {
      path:'/api_test',
      name:'ApiTest',
      component:ApiTest
    }
  ]
})
