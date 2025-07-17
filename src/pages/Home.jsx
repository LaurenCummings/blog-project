import '../css/Home.css';
import { useState } from 'react';
import Categories from '../components/Categories';
import Feed from '../components/Feed';
import SearchResults from '../components/SearchResults';

function Home() {
    const [showFeed, setShowFeed] = useState(true);

    return (
        <div className="home">
            <div className="categories">
                <Categories />
            </div>
            <div className="feed">
                { showFeed ? 
                    <Feed /> : <SearchResults />
                }
            </div>
            <div className="suggested-posts">
                Suggested posts
            </div>
        </div>
    )
}

export default Home;