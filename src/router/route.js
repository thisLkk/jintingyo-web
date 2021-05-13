module.exports = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('@src/views/index/index.vue'),
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '首页'
        },
        component: () => import('@views/index/index/index.vue')
      }
    ]
  }
]
