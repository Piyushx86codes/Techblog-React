import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();


   function AppContextProvider({children}){
    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(1);
    const[totalpages,setTotalPages] = useState(null);


    async function fetchBlogData(page = 1,tag = null,category){
        setLoading(false);
        let url = `${baseUrl}get-blogs?page=${page}`;
        if(tag){
            baseUrl += `&tag=${tag}`;
        }
        if(category){
            baseUrl += `&category=${category}`;
        }
        try {
            const result = await fetch(url);
            const data = await result.json();
            if(!data.posts || data.posts.length === 0){
                throw new Error("Something Went Wrong");
            }
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log("Error fetching the data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);

        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogData(page);
    }

    const value ={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalpages,
        setTotalPages,
        fetchBlogData,
        handlePageChange,
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export default AppContextProvider;
