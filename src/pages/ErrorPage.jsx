import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
    <h1>Error 404 Page Not Found</h1>
    <Link to="/">Home</Link>
    </>
  )
}

export default ErrorPage