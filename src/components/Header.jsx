import React from 'react'
import logo from '../assests/logo.jpg'

function Header() {
  return (
    <div className="py-1 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-stone-800">
      <img className="w-11/12 justify-evenly content-evenly items-center py-4 mx-auto max-w-[200px]" src={logo} />
    </div>
  )
}

export default Header