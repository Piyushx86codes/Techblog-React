import { useContext } from "react"
import { AppContext } from "../context/AppContext";
import { Spinner } from "./Spinner";

export const Blogs = () => {
    const {loading, posts} = useContext(AppContext);
    return (
        <div>
          {
            loading ? (<Spinner/>) : 
            (
                posts.length === 0 ?
                (
                   <div>
                    <h1>No Posts Found</h1>
                   </div>
                ) :
                (posts.map((post) => (
                    <BlogDetails key={post.id} post={post}/>
                )))
            )
          }
        </div>
    )
}