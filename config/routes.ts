export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login', path: '/user/login', component: './user/Login',
      },
      {name: 'Register', path: '/user/register', component: './user/Register',},
      {
        component: './404',
      },
    ],
  },

  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',//控制用户的访问权限
    component: './Admin',
    routes: [
      {
        path: './user-manager',
        //localhost:8000/admin/user-manager
        name: '宇航员管理档案📑',
        icon: 'smile',
        //文件路径
        component: './Admin/UserManage',
      },
      //复制一个可添加一个页面
      // {
      //   path: './user-manager',
      //   //localhost:8000/admin/user-manager
      //   name: '二级管理页面',
      //   icon: 'smile',
      //   //文件路径
      //   component: './Admin/UserManage',
      // },

      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
