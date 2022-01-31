import React, { useEffect, useState } from 'react'
import documentApi from '../../API/DocumentAPI'
import DocumentItem from '../DocumentItemComponent/DocumentItem'
import './TopDocument.css'

function TopDocument() {
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        const getDocument = async () => {
            const res = await documentApi.getAllDocument()
            const data = res.data
            console.log(res)
            setDocuments(res.sort((a,b) => b.views - a.views).slice(0,3))
        }
        getDocument()
    },[])
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
                    {documents.map((doc,index) => (<DocumentItem key={index} document={doc}/>))}
                </div>
            </div>
        </div>
    )
}

export default TopDocument