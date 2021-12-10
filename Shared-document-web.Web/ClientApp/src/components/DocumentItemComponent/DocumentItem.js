import React from 'react'
import './DocumentItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDownload, faShare } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'


function DocumentItem() {
    return (
        <div className='document-item radius-10'>
            <Link><img src='https://cdn.slidesharecdn.com/ss_thumbnails/trilliondollarcoachslideshare-190415231411-thumbnail-3.jpg?cb=1580173579' alt='document-image'/></Link>
            
            <div className='document-item-info'>
                <div className='document-item-header'>
                    <p className='document-item-user-name'>admin</p>
                    <Link className='document-item-name' >Digital 2021</Link>
                </div>

                <div className='document-item-footer' >
                    <p>1,2452,225 lượt tải</p>
                    <div className='document-item-footer-reaction'>
                        <div className='document-item-footer-icon'><FontAwesomeIcon icon={faHeart} /></div>
                        <div className='document-item-footer-icon'><FontAwesomeIcon icon={faDownload} /></div>
                        <div className='document-item-footer-icon'><FontAwesomeIcon icon={faShare} /></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DocumentItem