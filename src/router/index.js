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
    },
    {
      path: '/home',
      name: '数据分析',
      iconClass: 'fa fa-bar-chart',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/dataview',
          name: '数据概览',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/dataOverView')
        },
        {
          path: '/home/mapdata',
          name: '地图概览',
          iconClass: 'fa fa-map-marker',
          component: () => import('@/components/dataAnalysis/mapData')
        },
        {
          path: '/home/maptwo',
          name: '出行地图',
          iconClass: 'fa fa-plane',
          component: () => import('@/components/dataAnalysis/mapTwo')
        },
        {
          path: '/home/mapthree',
          name: '分数地图',
          iconClass: 'fa fa-map-pin',
          component: () => import('@/components/dataAnalysis/mapThree')
        }
      ]
    }
  ],
  mode: 'history'
})
