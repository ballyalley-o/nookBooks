import { SERVER_URL } from '../config/config-global'

function path(server, sublinks) {
  return server + sublinks
}

export const Sublinks = {
  books: '/books',
}

export const PATH_BOOKS = {
  BOOKS: path(SERVER_URL, Sublinks.books),
}
