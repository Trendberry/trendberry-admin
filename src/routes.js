import React from 'react'
import PrivateRoutes from 'components/PrivateRoutes'
import { AppFrame, HomePage, VendorListPage } from 'components'
import {

  CategoryCreatePage,
  CategoryListPage,
  CategoryUpdatePage,

  ProductListPage,
  ProductCreatePage,
  ProductUpdatePage,

  SigninPage,

  ShopCreatePage,
  ShopListPage,
  ShopUpdatePage,

  UserCreatePage,
  UserListPage,
  UserUpdatePage,

  VendorCreatePage,
  VendorUpdatePage,
} from 'containers'
import { Link } from 'react-router-dom'

const routes = [
  {
    path: '/signin',
    component: SigninPage,
    exact: true,
  },
  {
    component: PrivateRoutes,
    routes: [
      {
        component: AppFrame,
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
            path: '/shops/create',
            component: ShopCreatePage,
            exact: true,
            title: 'Create shop',
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
            path: '/vendors/create',
            component: VendorCreatePage,
            exact: true,
            title: 'Create vendor',
          },
          {
            path: '/vendors/:id',
            component: VendorUpdatePage,
            exact: true,
            title: 'Update vendor',
          },
          {
            path: '/products',
            component: ProductListPage,
            exact: true,
            title: 'Products',
          },
          {
            path: '/products/create',
            component: ProductCreatePage,
            exact: true,
            title: 'Create product',
          },
          {
            path: '/products/:id',
            component: ProductUpdatePage,
            exact: true,
            title: 'Update product',
          },
          {
            path: '/users',
            component: UserListPage,
            exact: true,
            title: 'Users',
          },
          {
            path: '/users/create',
            component: UserCreatePage,
            exact: true,
            title: 'Create user',
          },
          {
            path: '/users/:id',
            component: UserUpdatePage,
            exact: true,
            title: 'Update user',
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
