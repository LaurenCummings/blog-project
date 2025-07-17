import '../css/Categories.css';
import { getPostTags } from '../ApiCalls';
import useFetch from '../components/useFetch';
import { useState, useEffect } from 'react';

function Categories({ selectCategory }) {
    const { data, error, pending } = useFetch(getPostTags, {});
    const [categories, setCategories] = useState();

    function handleClick(category) {
        const dataToSend = category;
        selectCategory(dataToSend);
    }

    useEffect(() => {
        if (data) {
            setCategories(data);
        }
    }, [data]);
    
    return (
        <div>
            <h2>Search by Topic</h2>
            <div className="categories-list">
                {categories && categories.sort().map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleClick(item)}>{item}</li>  
                    )
                })}
            </div>
        </div>
    )
}

export default Categories;