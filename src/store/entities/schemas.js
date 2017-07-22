import { schema } from 'normalizr'

export const categories = new schema.Entity('categories', {}, {
  idAttribute: '_id',
})

export const shops = new schema.Entity('shops', {}, {
  idAttribute: '_id',
})

// export const category = new schema.Entity('category', {}, {
//   idAttribute: '_id',
// })

// export const shop = new schema.Entity('shop', {}, {
//   idAttribute: '_id',
// })

// export const vendor = new schema.Entity('vendor', {}, {
//   idAttribute: '_id',
// })

// export const product = new schema.Entity('product', {}, {
//   idAttribute: '_id',
// })

// export const user = new schema.Entity('user', {}, {
//   idAttribute: '_id',
// })

// export const resource = new schema.Entity('resource', {}, {
//   idAttribute: '_id',
// })

// export const actionsMeta = {
//   CATEGORY_LIST_READ_SUCCESS: { property: 'list', schema: [category] },
//   CATEGORY_CREATE_SUCCESS: { property: 'detail', schema: category },
//   CATEGORY_DETAIL_READ_SUCCESS: { property: 'detail', schema: category },

//   SHOP_LIST_READ_SUCCESS: { property: 'list', schema: [shop] },
//   SHOP_CREATE_SUCCESS: { property: 'detail', schema: shop },

//   VENDOR_LIST_READ_SUCCESS: { property: 'list', schema: [vendor] },
//   VENDOR_CREATE_SUCCESS: { property: 'detail', schema: vendor },

//   PRODUCT_LIST_READ_SUCCESS: { property: 'list', schema: [product] },
//   PRODUCT_CREATE_SUCCESS: { property: 'detail', schema: product },

//   USER_LIST_READ_SUCCESS: { property: 'list', schema: [user] },
//   USER_CREATE_SUCCESS: { property: 'detail', schema: user },
// }
