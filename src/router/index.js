import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: () => import('@/components/Login')
    },
    {
      path: '*',
      name: 'NotFound',
      hidden: true,
      component: () => import('@/components/NotFound')
    },
    {
      path: '/home',
      name: '学生管理',
      redirect: '/home/student',
      iconClass: 'fa fa-user',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/student',
          name: '学生列表',
          iconClass: 'fa fa-list',
          component: () => import('@/components/students/studentList')
        },
        {
          path: '/home/work',
          name: '作业列表',
          iconClass: 'fa fa-list-alt',
          component: () => import('@/components/students/workList')
        },
        {
          path: '/home/info',
          name: '信息列表',
          iconClass: 'fa fa-list-ul',
          component: () => import('@/components/students/infoList')
        }
      ]
    }
  ],
  mode: 'history'
})
