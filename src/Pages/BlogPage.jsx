import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import { Header } from "../components/Header";

export const BlogPage = () => {
  const { setLoading, loading } = useContext(AppContext);
  const [Blog, setBlog] = useState(null);
  const [RelatedBlogs, setRelatedBlogs] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogsId=${blogId}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        setBlog(data.blog);
        setRelatedBlogs(data.RelatedBlogs);
    } catch (error) {
        console.log("Something Went Wrong");
        setBlog(null);
        setRelatedBlogs([]);
    }
    setLoading(false);
  }


  useEffect(()=>{
    if(blogId){
        fetchRelatedBlogs();
    }
  },[location.pathname])

  return (
    <div>
        <Header/>
        <div>
            <button onClick={()=>navigate(-1)}>
                Back
            </button>
        </div>
        {
            loading ? (<div><p>Loading</p></div>) : blog ? (
                <div>
                <BlogDetails post={Blog}/>
                <h2> Related Blogs</h2>
                {
                    RelatedBlogs.map((post)=>{
                        return <div key={post.id}>
                            <BlogDetails post={post}/>
                        </div>
                    })
                }
                </div>) : 
                (
                    <div>
                       <p>No Blog Found</p>
                    </div>)
        }
    </div>
  );
};