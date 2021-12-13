import React from 'react'
import DocumentItem from '../DocumentItemComponent/DocumentItem'
import './TopDocument.css'

function TopDocument() {
    return (
        <div className='top-document-section'>
            <h1>Nơi chia sẻ tài liệu học tập</h1>
            <p>Nhiều tài liệu cho nhiều lĩnh vực khác nhau</p>
            <div className='top-document-header'>
                <div className='top-line-left'></div>
                <h2>Tài liệu nổi bật</h2>
                <div className='top-line-right'></div>
            </div>
            <div className='document-item-section'>
                <div className='document-item-container radius-10'>
                    <DocumentItem />
                    <DocumentItem />
                    <DocumentItem />
                </div>
            </div>
        </div>
    )
}

export default TopDocument