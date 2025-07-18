import useFetch from '../components/useFetch';

function SearchResults(props) {
    const { data, error, pending } = useFetch(`https://dummyjson.com/posts/search?q=${props.category}`, {});

    return (
        <div>
            <p>{props.category}</p>
        </div>
    )
}

export default SearchResults;