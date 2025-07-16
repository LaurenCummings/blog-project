import { getPostTags } from '../ApiCalls';
import useFetch from '../components/useFetch';

function Categories() {
    const { data, error, pending } = useFetch(getPostTags, {});
    
    return (
        <div>
            Categories
        </div>
    )
}

export default Categories;