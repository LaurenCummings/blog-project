import { getPosts } from '../ApiCalls';
import useFetch from '../components/useFetch';
import { useState, useEffect } from 'react';

function Home() {
    const { data, error, pending } = useFetch(getPosts, {});
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState();

    useEffect(() => {
        setCurrentPost(posts[0]);
    }, [posts]);

    return (
        <div>
            {pending ? 
                <h3>Loading...</h3> : null
            }
            {error ?
                <h3>{error}</h3> : null
            }
            {
                data && setPosts(data.posts)
            }
        </div>
    )
}

export default Home;