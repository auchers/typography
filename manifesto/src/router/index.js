import Vue from 'vue'
import Router from 'vue-router'
import Version1 from '@/components/Version1'
import Version2 from '@/components/Version2'
import Version3 from '@/components/Version3'
import MainNav from '@/components/MainNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainNav',
      component: MainNav
    },
    {
      path: '/1',
      name: 'Version1',
      component: Version1,
      props: true
    },
    {
      path: '/2',
      name: 'Version2',
      component: Version2,
      props: true
    },
    {
      path: '/3',
      name: 'Version3',
      component: Version3
    }
  ]
})
