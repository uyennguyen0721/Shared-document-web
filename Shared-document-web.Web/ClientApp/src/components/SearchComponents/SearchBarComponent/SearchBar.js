import React, {memo} from 'react'
import './SearchBar.css'
import {useForm} from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function SearchBar({scrollDown, scrollDownStyle}) {
    const { register, handleSubmit} = useForm()

    const onsubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='search-bar-form'>
            <form onSubmit={handleSubmit(onsubmit)} >
                <input 
                    {...register('search', {required: true})}
                    className={`input-seach-form ${scrollDown && 'scroll-down-bar'}`}
                    placeholder='Tìm tài liệu...'
                    required
                    style={scrollDown ? scrollDownStyle : {}}
                />
                <button type='submit' id='search-btn' style={scrollDown ? scrollDownStyle : {}}><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    )
}

export default memo(SearchBar)