import '../css/CurrentPost.css';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function CurrentPost(props) {
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
        setCurrentPost(posts[0]);
    }, [posts]);

    // useEffect(() => {
    //     if (props.post) {
    //         setCurrentPost(posts[props.post - 1]);
    //         console.log(props.post);
    //     }
    // }, [props.post])

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

    // console.log(posts[props.post -1]);

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