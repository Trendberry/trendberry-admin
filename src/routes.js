import React from 'react'
import PrivateRoutes from 'components/PrivateRoutes'
import { HomePage } from 'components'
import {
  AppFrame,

  CategoryCreatePage,
  CategoryListPage,
  CategoryUpdatePage,

  ProductListPage,

  SigninPage,

  ShopListPage,
  ShopUpdatePage,

  UserListPage,
  VendorListPage,
} from 'containers'
import { Link } from 'react-router-dom'

const routes = [
  {
    path: '/signin',
    component: SigninPage,
    exact: true,
  },
  {
    component: AppFrame,
    routes: [
      {
        component: PrivateRoutes,
        routes: [
          {
            path: '/',
            component: HomePage,
            exact: true,
            title: 'Trendberry',
          },
          {
            path: '/categories',
            component: CategoryListPage,
            exact: true,
            title: 'Categories',
          },
          {
            path: '/categories/create',
            component: CategoryCreatePage,
            exact: true,
            title: 'Create category',
          },
          {
            path: '/categories/:id',
            component: CategoryUpdatePage,
            exact: true,
            title: 'Edit category',
          },
          {
            path: '/shops',
            component: ShopListPage,
            exact: true,
            title: 'Shops',
          },
          {
            path: '/shops/:id',
            component: ShopUpdatePage,
            exact: true,
            title: 'Edit shop',
          },
          {
            path: '/vendors',
            component: VendorListPage,
            exact: true,
            title: 'Vendors',
          },
          {
            path: '/products',
            component: ProductListPage,
            exact: true,
            title: 'Products',
          },
          {
            path: '/users',
            component: UserListPage,
            exact: true,
            title: 'Users',
          },
          {
            path: '/settings',
            component: () => (<div>Settings</div>),
            exact: true,
            title: 'Settings',
          },
          {
            component: () => (<div>404 not found</div>),
          },
        ],
      },
      {
        path: '/test',
        component: () => (<Link to="/signin">sgsdfg</Link>),
        exact: true,
      },
      {
        component: () => (<div>404 not found</div>),
      },
    ],
  },
  {
    component: () => (<div>404 not found</div>),
  },
]

export default routes
