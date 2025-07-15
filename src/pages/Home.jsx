import { getPosts } from '../ApiCalls';
import useFetch from '../components/useFetch';

function Home() {
    const { data, error, pending } = useFetch(getPosts, {});

    return (
        <div>
            {pending ? 
                <h3>Loading...</h3> : null
            }
            {error ?
                <h3>{error}</h3> : null
            }
            {
                data && console.log(data)
            }
        </div>
    )
}

export default Home;