import React, {useState} from 'react';
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState('');

    const filterNotes = (e) => {
        props.onSearch(e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div className={styles['search-container']}>
            <label for="search">Search: </label>
            <input onChange={filterNotes} value={inputValue} type="text" name="search"></input>
        </div>
    );
};

export default SearchBar;