import { createContext, useState } from "react";


const AppContext = createContext();


function AppContextProvider({children}){
    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);
    const[page,setPage] = useState(1);
    const[totalpages,setTotalPages] = useState(null);

    const value ={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalpages,
        setTotalPages
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}