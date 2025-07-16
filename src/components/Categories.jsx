import { getPostTags } from '../ApiCalls';
import useFetch from '../components/useFetch';
import { useState } from 'react';

function Categories() {
    const { data, error, pending } = useFetch(getPostTags, {});
    const [categories, setCategories] = useState();
    
    return (
        <div>
            Categories
        </div>
    )
}

export default Categories;