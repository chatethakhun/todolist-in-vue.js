import gql from 'graphql-tag'

export const Query = gql`
  query {
    languages {
      code
      name
    }
  }
`
