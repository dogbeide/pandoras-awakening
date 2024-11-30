import { gql } from "@apollo/client"

export const GET_BLOG_POST_PREVIEWS = gql`
  query BlogPostPreviews($after: String = "10") {
    posts(
      where: {status: PUBLISH, authorNotIn: "dXNlcjo2"},
      first: 10, 
      after: $after
    ) {
      nodes {
        author {
          node {
            id
            name
            slug
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
        status
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`
export const GET_PUBLISHED_AUTHORS = gql`
  query GetAuthors {
    users(where: {hasPublishedPosts: POST}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
export const GET_BLOG_POST_PREVIEWS_AUTHOR = gql`
  query BlogPostPreviewsAuthor($after: String = "asdf", $authorId: [ID]) {
    posts(
      where: {status: PUBLISH, authorIn: $authorId}
      first: 10
      after: $after
    ) {
      nodes {
        author {
          node {
            id
            name
            slug
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
        status
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

export const GET_BLOG_POST_DETAIL = gql`
  query BlogPostDetail($id: ID!) {
    post(id: $id, idType: URI) {
      author {
        node {
          id
          name
          slug
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
