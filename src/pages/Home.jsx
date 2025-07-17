import '../css/Home.css';
import { useState } from 'react';
import Categories from '../components/Categories';
import CurrentPost from '../components/CurrentPost';
import SearchResults from '../components/SearchResults';

function Home() {
    const [showCurrentPost, setShowCurrentPost] = useState(true);
    const [category, setCategory] = useState();

    function handleCategorySelect(selectedCategory) {
        setCategory(selectedCategory);
    }

    console.log(category);

    return (
        <div className="home">
            <div className="categories">
                <Categories selectCategory={handleCategorySelect}/>
            </div>
            <div className="feed">
                { showCurrentPost ? 
                    <CurrentPost /> : <SearchResults />
                }
            </div>
            <div className="suggested-posts">
                Suggested posts
            </div>
        </div>
    )
}

export default Home;