import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import Card from './Card.jsx'
import './Spinner.css'

function Blog() {
  const{articles}=useContext(AppContext)
  return (
    <div className="max-w-[620px] w-11/12 mx-5 px-5 py-3 flex flex-col gap-y-7 my-[100px]">
      {
      articles?.length===0?(<div><div className='spinner'></div>
        <p>Loading</p></div>):(<Card/>)
      }
    </div>
  )
}

export default Blog