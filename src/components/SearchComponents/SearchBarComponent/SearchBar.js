import React, {memo} from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from 'react-router-dom'

function SearchBar({scrollDown, scrollDownStyle}) {
    const path = useLocation()

    return (
        <div className='search-bar-form'>
            <form action='/search' autoComplete='off' >
                <input 
                    className={`input-seach-form ${(scrollDown || path.pathname !== '/') && 'scroll-down-bar'}`}
                    placeholder='Tìm tài liệu...'
                    required
                    style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}
                    name="keyword"
                />
                <button type='submit' id='search-btn' style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    )
}

export default memo(SearchBar)