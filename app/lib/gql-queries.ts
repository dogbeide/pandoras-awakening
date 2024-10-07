import { gql } from "@apollo/client"

export const GET_BLOG_POST_PREVIEWS = gql`
  query BlogPostPreviews {
    posts(where: {status: PUBLISH}) {
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

export const GET_BLOG_POST_DETAIL = gql`
  query BlogPostDetail($id: ID!) {
    post(id: $id, idType: URI) {
      author {
        node {
          name
        }
      }
      title
      uri
      date
      categories {
        nodes {
          name
          uri
        }
      }
      featuredImage {
          node {
            sourceUrl
          }
        }
      content
    }
  }
`
// export const GET_BLOG_POST_DETAILs = gql`
//   query BlogPostDetail {
//     post(id: "/2021/06/27/the-elephant-in-the-room-racism-in-the-therapy-space", idType:URI) {
//       author {
//         node {
//           name
//         }
//       }
//       uri
//       date
//       categories {
//         nodes {
//           name
//           uri
//         }
//       }
//       content
//     }
//   }
// `
