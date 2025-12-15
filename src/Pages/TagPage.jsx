import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import { Blogs } from "../components/Blogs";
import { Header } from "../components/Header";



export const TagPage=()=>{

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div>
            <div>
            <Header/>
            <button onClick={()=> navigation(-1)}>
              Back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}