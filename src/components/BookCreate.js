import { useState } from 'react'
import useBooksContext from '../hooks/useBooksContext'

function BookCreate() {
  const [title, setTitle] = useState('')
  const { createBook } = useBooksContext()

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
