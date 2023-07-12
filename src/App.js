import { useContext, useEffect } from 'react'
import BooksContext from './context/books'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { GiBookmarklet } from 'react-icons/gi'

function App() {
  const { fetchBooks } = useContext(BooksContext)
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className='app'>
      <h1>
        <GiBookmarklet />
        nookBooks
      </h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
