import '../css/Categories.css';
import { getPostTags } from '../ApiCalls';
import useFetch from '../components/useFetch';
import { useState, useEffect } from 'react';

function Categories() {
    const { data, error, pending } = useFetch(getPostTags, {});
    const [categories, setCategories] = useState();

    useEffect(() => {
        if (data) {
            setCategories(data);
        }
    }, [data]);
    
    return (
        <div className="categories-list">
            {categories && categories.map((item, index) => {
                return (
                    <li key={index}>{item}</li>  
                )
            })}
        </div>
    )
}

export default Categories;