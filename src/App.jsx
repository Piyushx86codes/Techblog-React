
import { Header } from './components/Header'
import {Blogs} from "./components/Blogs"
import {Pagination} from "./components/Pagination"
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  
  const {fetchBlogData} = useContext(AppContext);

  useEffect(()=>{
       fetchBlogData();
  },[])

  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
