import React from 'react'
import './DocumentItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDownload, faShare } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { BaseURL } from '../../API/BaseUrl'


function DocumentItem({document}) {
    return (
        <div className='document-item radius-10'>
            <Link to={`/documents/detail/${document.documentId}`}><img src={`${BaseURL}${document.imagePreview}`} alt='document-image'/></Link>
            
            <div className='document-item-info'>
                <div className='document-item-header'>
                    <p className='document-item-user-name'>admin</p>
                    <Link className='document-item-name' to={`/documents/detail/${document.documentId}`}>{document.documentName}</Link>
                </div>

                <div className='document-item-footer' >
                    <p>{document.views} lượt xem</p>
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