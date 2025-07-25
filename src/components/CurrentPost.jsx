import '../css/CurrentPost.css';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function CurrentPost(props) {
    const [currentPost, setCurrentPost] = useState();
    const [firstPost, setFirstPost] = useState(false);
    const [lastPost, setLastPost] = useState(false);

    function getNextPost() {
        const nextPostId = currentPost.id + 1;
        setCurrentPost(props.posts[nextPostId - 1]);
    }

    function getPrevPost() {
        const prevPostId = currentPost.id - 1;
        setCurrentPost(props.posts[prevPostId - 1]);
    }

    useEffect(() => {
        if (props.posts) {
            setCurrentPost(props.posts[0]);    
        }
    }, [props.posts]);

    useEffect(() => {
        if (props.post) {
            setCurrentPost(props.posts[props.post - 1]);
        }
    }, [props.post])

    useEffect(() => {
        if (currentPost && currentPost.id == 1) {
            setFirstPost(true);
        } else {
            setFirstPost(false);
        }
        if (currentPost && currentPost.id == props.posts.length) {
            setLastPost(true);
        } else {
            setLastPost(false);
        }
    }, [currentPost]);

    return (
        <div className="feed-component">
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
    )
}

export default CurrentPost;