import React from 'react'
import { Route } from 'react-router'
import { HomePage, PrivateRoutes } from 'components'
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

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }} />
)

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)

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
            component: NotFound,
          },
        ],
      },
      {
        path: '/test',
        component: () => (<Link to="/signin">sgsdfg</Link>),
        exact: true,
      },
      {
        component: NotFound,
      },
    ],
  },
  {
    component: NotFound,
  },
]

export default routes
