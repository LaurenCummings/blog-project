import { getPosts } from '../ApiCalls';
import useFetch from '../components/useFetch';

function Home() {
    const { data, error, pending } = useFetch(getPosts, {});
    
    return (
        <div>
            Home
        </div>
    )
}

export default Home;