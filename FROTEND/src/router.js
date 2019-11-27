import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import usuario from './components/usuario'
import perfil from './components/perfil'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: usuario
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: perfil
    },
  ]
})
