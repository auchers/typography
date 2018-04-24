import Vue from 'vue'
import Router from 'vue-router'
import Version1 from '@/components/Version1'
import Version2 from '@/components/Version2'
import Version3 from '@/components/Version3'
import Version4 from '@/components/Version4'
import Version5 from '@/components/Version5'
import MainNav from '@/components/MainNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainNav',
      component: MainNav,
      props: true
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
    },
    {
      path: '/4',
      name: 'Version4',
      component: Version4
    },
    {
      path: '/5',
      name: 'Version5',
      component: Version5
    },
  ]
})
