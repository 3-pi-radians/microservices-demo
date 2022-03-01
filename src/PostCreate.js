import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const submitPost = async (e) => {
        e.preventDefault();

        const resp = await axios.post('http://posts.com/posts/create', {
            title
        });

        setTitle('');
    }
    return (
        <div>
            <form onSubmit = {submitPost}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control"
                      value = {title}
                      onChange = {e => setTitle(e.target.value)}
                    ></input>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}

export default PostCreate;