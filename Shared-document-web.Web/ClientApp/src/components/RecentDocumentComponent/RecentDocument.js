import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import documentApi from '../../API/DocumentAPI'
import DocumentItem from '../DocumentItemComponent/DocumentItem'
import './RecentDocument.css'

function RecentDocument() {
    const [documents, setDocument] = useState([])

    useEffect(() => {
        const getAll = async () => {
            const res = await documentApi.getAllDocument()
            setDocument(res.filter((doc) => doc.isCheck === true).sort((a,b) => b.uploadDate - a.uploadDate).slice(0,12))
        }
        getAll()
    },[])
    return (
        <div className='recent-document-section'>
            <div className='container-center'>
                <div className='recent-document-header'>
                    <h1>Tài liệu mới đăng</h1>
                    <div className='line-center'></div>
                    <Link to='/documents'>Xem tất cả</Link>
                </div>
                <div className='recent-document-container'>
                       {documents.map((doc,index) => (<DocumentItem key={index} document={doc} />))}
                </div>
            </div>
        </div>
    )
}

export default RecentDocument