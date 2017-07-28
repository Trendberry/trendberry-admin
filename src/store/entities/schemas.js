import { schema } from 'normalizr'

export const categories = new schema.Entity('categories', {}, {
  idAttribute: '_id',
})

export const shops = new schema.Entity('shops', {}, {
  idAttribute: '_id',
})

export const vendors = new schema.Entity('vendors', {}, {
  idAttribute: '_id',
})

export const products = new schema.Entity('products', {}, {
  idAttribute: '_id',
})

export const users = new schema.Entity('users', {}, {
  idAttribute: '_id',
})

export const pages = new schema.Entity('pages', {}, {
  idAttribute: '_id',
})
