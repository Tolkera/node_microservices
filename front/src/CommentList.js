import React, {useState, useEffect} from 'react';
import axios from "axios";
export default ({postId}) => {
    const [comments, setComments] = useState({})
    const fetchComments = async() => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data)
    };
    useEffect(()=>{
        fetchComments();
    }, [])
    const commentList = Object.values(comments).map(comment =>
        <li className="" key={comment.id}>
            {comment.content}

        </li>
    )
     return <ul>

         {commentList}
     </ul>
}