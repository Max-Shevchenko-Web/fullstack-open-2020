import { gql  } from '@apollo/client'

export const ALL_AUTHORS = gql`
query {
  allAuthors  {
    name
    born
    bookCount
    id
    books {
    	title
      id
    }
  }
}
`

export const ALL_BOOKS = gql`
query allBooksQuery($author: String, $genre: String){
  allBooks(author: $author, genre: $genre) {
    title
    published
    genres
    id
    author {
      name
    }
  }
}
`

export const Me = gql`
query {
  me{
    username
    favoriteGenre
  }
}
`

export const CREATE_BOOK = gql`
mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
  addBook (
    title: $title
    author: $author
    published: $published
    genres: $genres
  ){
    title
    author {
      name
    }
    published
    genres
    id
  }
}
`

export const EDIT_AUTHOR= gql`
mutation editAuthor($name: String!, $setBornTo: Int!) {
  editAuthor (
    name: $name
    setBornTo: $setBornTo
  ){
    name
    born
    bookCount
    id
  }
}
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`