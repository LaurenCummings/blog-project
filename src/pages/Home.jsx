import '../css/Home.css';
import { useState } from 'react';
import Categories from '../components/Categories';
import CurrentPost from '../components/CurrentPost';
import SearchResults from '../components/SearchResults';

function Home() {
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

    console.log(selectedPostId);

    return (
        <div className="home">
            <div className="categories">
                <Categories selectCategory={handleCategorySelect}/>
            </div>
            <div className="feed">
                { showCurrentPost ? 
                    <CurrentPost /> : <SearchResults category={category} sendSelectedPostToHome={handlePostSelect} />
                }
            </div>
            <div className="suggested-posts">
                Suggested posts
            </div>
        </div>
    )
}

export default Home;