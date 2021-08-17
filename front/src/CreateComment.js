import React, {useState} from 'react';
import axios from "axios";

export default ({postId}) => {
    const [comment, setComment] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content: comment
        });
        setComment("");
    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group mb-3 ">
                <label className="form-label">New Comment</label>
                <input
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    type="text"
                    className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}
