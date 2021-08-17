import React, {useState, useEffect} from 'react';
import axios from "axios";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
export default () => {
    const [posts, setPosts] = useState({})
    const fetchPosts = async() => {
        const res = await axios.get("http://localhost:4002/posts");
        setPosts(res.data)
    };
    useEffect(()=>{
        fetchPosts();
    }, [])
    const postList = Object.values(posts).map(post =>
        <div className="card mb-3" key={post.id}>
            <div className="card-body">
                <h2 className="mb-5">{post.title} </h2>
                <h4>Comments</h4>
                <CommentList comments={post.comments}/>
                <CreateComment postId={post.id} />
            </div>
        </div>
    )
     return <div>
         {postList}
     </div>
}