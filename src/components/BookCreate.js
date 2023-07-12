import { useState, useContext } from 'react'
import BookContext from '../context/books'

function BookCreate() {
  const [title, setTitle] = useState('')
  const { createBook } = useContext(BookContext)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add your Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Publish Book</button>
      </form>
    </div>
  )
}

export default BookCreate
