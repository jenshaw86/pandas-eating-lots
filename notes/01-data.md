# GraphQL
`siteMetadata` object in `gatsby-config.js` file can hold common data

import graphql from gatsby

include query in page file

```javascript
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

pull data from `data.site.siteMetadata.title`

pages make page queries
non-page components make staticqueries
# StaticQuery
allows components (not page files) to retrieve data via graphql queries

hook - `useStaticQuery`

