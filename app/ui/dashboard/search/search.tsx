import React from 'react';
import s from './search.module.css'
import {MdSearch} from "react-icons/md";

interface SearchProps {
    placeholder?: string
}

const Search = ({placeholder}: SearchProps) => {
    return (
        <div className={s.container}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className={s.input}/>
        </div>
    );
};

export default Search;