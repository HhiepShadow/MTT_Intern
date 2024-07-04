import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <div className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, that's disapointing</p>
      <p>
        <Link to='/'>Go back to Home Page</Link>
      </p>
    </div>
  )
}

export default Missing