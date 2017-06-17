import Vue from 'vue'
import Router from 'vue-router'
import General from '@/components/pages/General'
import Shortcuts from '@/components/pages/Shortcuts'
import EditShortcut from '@/components/pages/EditShortcut'
import Help from '@/components/pages/Help'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'general' }
    },
    {
      path: '/general',
      name: 'general',
      component: General
    },
    {
      path: '/shortcuts',
      name: 'shortcuts',
      component: Shortcuts
    },
    {
      path: '/edit-shortcut',
      name: 'edit-shortcut',
      props: (route) => route.query,
      component: EditShortcut
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
