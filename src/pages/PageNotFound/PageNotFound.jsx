import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

const PageNotFound = () => {
  return (
    <div className='PageNotFound'>
      <h1>404</h1>
          <p>Something Went wrong</p>
          <Link to="/chat">Go To Home</Link>
    </div>
  )
}

export default PageNotFound
