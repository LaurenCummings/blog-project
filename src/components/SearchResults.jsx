import '../css/SearchResults.css';
import { useState, useEffect } from 'react';
import useFetch from '../components/useFetch';

function SearchResults(props) {
    const { data, error, pending } = useFetch(`https://dummyjson.com/posts/search?q=${props.category}`, {});
    const [postResults, setPostResults] = useState([]);

    function handlePostClick(postId) {
        props.sendSelectedPostToHome(postId);
    }

    useEffect(() => {
        if (data) {
            setPostResults(data.posts);   
        }
    },[data]);

    return (
        <div className="search-results">
            <h2>Search Results for {props.category}</h2>
            { postResults.length > 0 ? postResults.map((item) => {
                return (
                    <div key={item.id} className="post-result" onClick={() => handlePostClick(item.id)}>
                        <h3>Post #{item.id}</h3>
                        <p>{item.title}</p>
                    </div>
                )
            })
                : <div className="no-results">
                    <h3>There are no post results for {props.category}.</h3>
                </div>
            }
        </div>
    )
}

export default SearchResults;