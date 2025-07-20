import '../css/Home.css';
import { useState, useEffect } from 'react';
import { getPosts } from '../ApiCalls';
import useFetch from '../components/useFetch';
import Categories from '../components/Categories';
import CurrentPost from '../components/CurrentPost';
import SearchResults from '../components/SearchResults';

function Home() {
    const { data, error, pending } = useFetch(getPosts, {});
    const [posts, setPosts] = useState([]);
    const [showCurrentPost, setShowCurrentPost] = useState(true);
    const [category, setCategory] = useState();
    const [selectedPostId, setSelectedPostId] = useState();

    function handleCategorySelect(selectedCategory) {
        setCategory(selectedCategory);
        setShowCurrentPost(false);
    }

    function handlePostSelect(selectedPostIdFromSearch) {
        setSelectedPostId(selectedPostIdFromSearch);
        setShowCurrentPost(true);
    }

    useEffect(() => {
        if (data && data.posts && data.posts.length) {
            setPosts(data.posts);    
        }    
    }, [data]);

    return (
        <div className="home">
            <div className="categories">
                <Categories selectCategory={handleCategorySelect}/>
            </div>
            <div className="feed">
                { showCurrentPost ? 
                    <CurrentPost posts={posts} post={selectedPostId} /> : <SearchResults category={category} sendSelectedPostToHome={handlePostSelect} />
                }
            </div>
            <div className="suggested-posts">
                Suggested posts
            </div>
        </div>
    )
}

export default Home;