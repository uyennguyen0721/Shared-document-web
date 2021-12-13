import React from 'react'
import { Link } from 'react-router-dom'
import DocumentItem from '../DocumentItemComponent/DocumentItem'
import './RecentDocument.css'

function RecentDocument() {
    return (
        <div className='recent-document-section'>
            <div className='container-center'>
                <div className='recent-document-header'>
                    <h1>Tài liệu mới đăng</h1>
                    <div className='line-center'></div>
                    <Link to='/documents'>Xem tất cả</Link>
                </div>
                <div className='recent-document-container'>
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                </div>
            </div>
        </div>
    )
}

export default RecentDocument