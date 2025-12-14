
import { Header } from './components/Header'
import {Blogs} from "./components/Blogs"
import {Pagination} from "./components/Pagination"
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'


function App() {
  
  const {fetchBlogData} = useContext(AppContext);
  const [SearchParams,setSearchParams] = useParams();
  const location = useLocation();


  useEffect(() => {
    const page = SearchParams.get("page") && 1;
    if (location.pathname.includes("tag")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogData(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogData(Number(page),null,category);
    } else {
       fetchBlogData();
    }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  )
}

export default App
