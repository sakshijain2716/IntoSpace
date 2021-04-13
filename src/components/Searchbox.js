import '../Searchbox.css';

const Search = (props) => {
    return (
        <div className='search'>
            <div className='search_bar'>{props.children}</div>
        </div>
    );
};

export default Search;