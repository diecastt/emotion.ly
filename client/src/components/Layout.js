import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Genres from './Genres'

export const Layout = () => {
  
  const navigate = useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    navigate('/playlist', {
      state: {
        text: "text",
        genres: "selectedGenres"
      }
    });
  };
  

  

  return (
    <div>
        <Genres/>
    </div>

  )
}
export default Layout