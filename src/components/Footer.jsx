import React from 'react'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='relative bg-violate-900 b-0 px-4  flex items-center justify-center'>
       <p>Made with ♥ &copy; {year}</p> 
    </div>
  )
}

export default Footer