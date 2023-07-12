import { SERVER_URL } from '../config/config-global'

function path(server, sublink) {
  return `${server}${sublink}`
}

export const Sublinks = {
  books: '/books',
}

export const PATH_BOOKS = {
  BOOKS: path(SERVER_URL, Sublinks.books),
}
