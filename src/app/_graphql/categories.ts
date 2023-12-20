export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `query Categories {
  Categories(limit: 3000) {
    docs {
      id
      title
      media {
        alt
        width
        height
        url
      }
    }
  }
}`
