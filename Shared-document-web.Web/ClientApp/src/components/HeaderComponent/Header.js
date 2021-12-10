import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../SearchComponents/SearchBarComponent/SearchBar'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const [scrollDown, setScrollDown] = useState(false)
    const headerBar = useRef()

    const handleScroll = () => {
        if(window.pageYOffset > headerBar.current.offsetTop) {
            setScrollDown(true)
        } else {
            setScrollDown(false)
        }
    }

    const scrollDownStyle = {
        color: '#07253f',
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])
    return (
        <header className={scrollDown && 'scroll-down'} ref={headerBar}>
            <div className='container-center header-container'>
                <div className='nav-link'>
                    <h1>OUShare</h1>
                    <Link to="/" style={scrollDown ? scrollDownStyle : {}}>Trang chủ</Link>
                    <Link to='/documents' style={scrollDown ? scrollDownStyle : {}}>Tài liệu</Link>
                </div>
                
                <div className='search-bar'>
                    <SearchBar scrollDown={scrollDown} scrollDownStyle={scrollDownStyle}/>
                </div>

                <div className='nav-user'>
                    <button id='upload-btn' className='radius-10'>Đăng tài liệu</button>
                    <a>Đăng nhập</a>
                    <a>Đăng ký</a>
                </div>
            </div>
        </header>
    )
}

export default Header