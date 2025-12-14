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
                    <div key={post.id}>
                        <p>{post.title}</p>
                        <p>
                            by <span>{post.author}</span> on <span>{post.category}</span>
                        </p> 
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div>
                            {post.tags.map((tag, index) => {
                                return <span key={index}>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
          }
        </div>
    )
}