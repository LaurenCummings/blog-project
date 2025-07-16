import '../css/Home.css';
import { getPosts } from '../ApiCalls';
import useFetch from '../components/useFetch';
import { useState, useEffect } from 'react';

function Home() {
    const { data, error, pending } = useFetch(getPosts, {});
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState();

    useEffect(() => {
        if (data && data.posts && data.posts.length) {
            setPosts(data.posts);    
        }    
    }, [data]);

    useEffect(() => {
        setCurrentPost(posts[0]);
    }, [posts]);

    console.log(posts);

    return (
        <div>
            {pending ? 
                <h3>Loading...</h3> : null
            }
            {error ?
                <h3>{error}</h3> : null
            }
            {currentPost &&
                <div>
                    <h2>{currentPost.title}</h2>
                    <p>{currentPost.body}</p>
                </div>
            }

        </div>
    )
}

export default Home;