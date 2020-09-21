export default function ({ type, uid }) {
  switch (type) {
    case 'product':
      return `/products/${uid}`
    case 'products':
      return '/products'
    case 'homepage':
    default:
      return '/'
  }
}
