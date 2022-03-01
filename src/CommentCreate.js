import axios from "axios";
import { useState } from "react";

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState(''); 

    const submitComment = async(e) => {
        e.preventDefault();

         axios.post(`http://posts.com/posts/${postId}/comments`, {
             content
         });
         setContent('');
    }
    return (
        <div>
            <form onSubmit={submitComment}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input
                     className="form-control" 
                     value = {content}
                     onChange = {e => setContent(e.target.value)}></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CommentCreate;