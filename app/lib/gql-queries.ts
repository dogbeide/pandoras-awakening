import { gql } from "@apollo/client"

export const GET_BLOG_POST_PREVIEWS = gql`
  query BlogPostPreviews {
    posts {
      nodes {
        author {
          node {
            name
          }
        }
        date
        id
        slug
        title
        uri
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            uri
          }
        }
      }
    }
  }
`