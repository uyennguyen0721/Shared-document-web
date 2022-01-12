import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../SearchComponents/SearchBarComponent/SearchBar'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../../redux/reducers/UserSlice'
import './Header.css'

function Header() {
    const [scrollDown, setScrollDown] = useState(false)
    const headerBar = useRef()
    const path = useLocation()
    const currentUser = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleScroll = () => {
        if(window.pageYOffset > headerBar.current.offsetTop) {
            setScrollDown(true)
        } else {
            setScrollDown(false)
        }
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    const scrollDownStyle = {
        color: '#07253f',
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])
    return (
        <header className={(scrollDown || path.pathname !== '/') ? 'scroll-down': undefined} ref={headerBar}>
            <div className='container-center header-container'>
                <div className='nav-link'>
                    <h1>OUShare</h1>
                    <Link to="/" style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}>Trang chủ</Link>
                    <Link to='/documents' style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}>Tài liệu</Link>
                </div>
                
                <div className='search-bar'>
                    <SearchBar scrollDown={scrollDown} scrollDownStyle={scrollDownStyle}/>
                </div>

                <div className='nav-user'>
                    <button id='upload-btn' className='radius-10'>Đăng tài liệu</button>
                    {
                        !currentUser.isLoggedIn ?
                            <React.Fragment>
                                <Link to="/login" style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}>Đăng nhập</Link>
                                <Link to="/register" style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}>Đăng ký</Link>
                            </React.Fragment>
                        : <React.Fragment>
                            <Link to="/userdetail" style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}>Xin chào, {currentUser.user.name}</Link>
                            <span onClick={handleLogout} style={(scrollDown || path.pathname !== '/') ? scrollDownStyle : {}}>Đăng xuất</span>
                        </React.Fragment>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header