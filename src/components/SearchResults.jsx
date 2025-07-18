import '../css/SearchResults.css';
import { useState, useEffect } from 'react';
import useFetch from '../components/useFetch';

function SearchResults(props) {
    const { data, error, pending } = useFetch(`https://dummyjson.com/posts/search?q=${props.category}`, {});
    const [postResults, setPostResults] = useState([]);
    console.log(postResults);

    useEffect(() => {
        if (data) {
            setPostResults(data.posts);   
        }
    },[data]);

    return (
        <div>
            <h2>Search Results ({props.category})</h2>
            { postResults && postResults.map((item) => {
                return (
                    <div key={item.id} className="post-result">
                        <h3>Post #{item.id}</h3>
                        <p>{item.title}</p>
                    </div>
                )
            })

            }
        </div>
    )
}

export default SearchResults;