import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


function Card() {
  const {articles}=useContext(AppContext)
  return (
    articles?.map((article,index)=>{
      
      return (
        <div className='border' key={index}>
        <div>
          <h2 className='italic font-bold text-md'>{article.title}</h2>
          <p className='text-[20px]'>{article.description}</p>
          <p>Published on:- {article.publishedAt}</p>
          <p className='text-[16px]'>{article.content}</p>
          <a href={article.url} target='_blank'>Link</a>
        </div>
          <div className='w-11/12 justify-evenly content-evenly items-center py-4 mx-auto max-w-[520px]'>
          <img src={article.urlToImage}/>
        </div>
        </div>
      )
    })
  )
}

export default Card