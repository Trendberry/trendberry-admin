import { stringify } from 'qs'

export const contructLocation = (location, query = {}, params = {}) => {
  return {
    ...location,
    search: `?${stringify({
      ...query,
      ...params,
    })}`,
  }
}
