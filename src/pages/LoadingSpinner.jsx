import React from 'react'
import Spinner from 'react-bootstrap/Spinner';





function LoadingSpinner() {
  return (
    <div className='d-flex justify-content-center align-item-center m-5'>
        <Spinner animation='grow' variant='danger' className='me-1'/> <span className='fs-4 text-danger' >Loading.......</span>
    </div>
  )
}

export default LoadingSpinner