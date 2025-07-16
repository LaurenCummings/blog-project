import '../css/Home.css';
import { getPosts } from '../ApiCalls';
import useFetch from '../components/useFetch';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Home() {
    const { data, error, pending } = useFetch(getPosts, {});
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState();
    const [firstPost, setFirstPost] = useState(false);
    const [lastPost, setLastPost] = useState(false);

    function getNextPost() {
        const nextPostId = currentPost.id + 1;
        setCurrentPost(posts[nextPostId - 1]);
    }

    function getPrevPost() {
        const prevPostId = currentPost.id - 1;
        setCurrentPost(posts[prevPostId - 1]);
    }

    useEffect(() => {
        if (data && data.posts && data.posts.length) {
            setPosts(data.posts);    
        }    
    }, [data]);

    useEffect(() => {
        setCurrentPost(posts[0]);
    }, [posts]);

    useEffect(() => {
        if (currentPost && currentPost.id == 1) {
            setFirstPost(true);
        } else {
            setFirstPost(false);
        }
        if (currentPost && currentPost.id == posts.length) {
            setLastPost(true);
        } else {
            setLastPost(false);
        }
    }, [currentPost]);

    console.log("first post:", firstPost, "last post:", lastPost);

    return (
        <div className="home">
            <div className="categories">
                Categories
            </div>
            <div className="feed">
                {pending ? 
                    <h3>Loading...</h3> : null
                }
                {error ?
                    <h3>{error}</h3> : null
                }
                {currentPost &&
                    <div className="current-post">
                        <p>Post #{currentPost.id}</p>
                        <h2>{currentPost.title}</h2>
                        <p className="post-body">{currentPost.body}</p>
                        <div className="post-arrows">
                            <div className={firstPost ? "arrow-hide" : "arrow-left"} onClick={getPrevPost}>
                                <FaArrowLeft />
                                <p>Previous</p>
                            </div>
                            <div className={lastPost ? "arrow-hide" : "arrow-right"} onClick={getNextPost}>
                                <p>Next</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="suggested-posts">
                Suggested posts
            </div>
        </div>
    )
}

export default Home;