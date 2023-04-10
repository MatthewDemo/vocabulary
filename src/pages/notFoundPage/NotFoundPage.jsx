import React from 'react'
import './NotFoundPage.scss'
import notFoundImage from '../../assets/not-found-image.jpg'

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <img src={notFoundImage} alt="Page not found" />
    </div>
  )
}

export default NotFoundPage
