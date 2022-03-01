import { useState, useEffect } from 'react';
import axios from 'axios'; 
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const response = await axios.get('http://posts.com/posts');

        console.log(response.data);
        setPosts(response.data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    console.log(posts);

    
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {
                Object.values(posts).map(post => <div key = {post.id} 
                        className='card'
                        style={{width: '30%', marginBottom: '20px'}}>
                        <div className='card-body'>
                            <h3>{post.title}</h3>
                            <CommentList comments={post.comments} /> 
                            <CommentCreate postId={post.id} />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default PostList;