import { useContext, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Blog from './components/Blog'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'

function App() {
  const {news}=useContext(AppContext)
    useEffect(()=>{
      news()
      },[])
  return (
    <>
     <div>
      <Header/>
      <Blog/>
      <Footer/>
     </div>
    </>
  )
}

export default App
