import { NOTIFICATION_SEND, NOTIFICATION_DISMISS, NOTIFICATION_CLEAR } from './actions'

export default (domain = [], action) => {
  if (!action || !action.type) return domain

  switch (action.type) {
    case NOTIFICATION_SEND:
      return [action.payload, ...domain.filter(({ id }) => id !== action.payload.id)]
    case NOTIFICATION_DISMISS:
      return domain.filter(notification =>
        notification.id !== action.payload
      )
    case NOTIFICATION_CLEAR:
      return []
    default:
      return domain
  }
}
