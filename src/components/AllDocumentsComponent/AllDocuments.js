import React from 'react'
import DocumentItem from '../DocumentItemComponent/DocumentItem'
import './AllDocuments.css'

function AllDocuments({documents, title}) {
    

    return (
        <div className='all-document-section'>
            <div className='container-center'>
                <h1 className='title-header'>{title}</h1>
                <div className='recent-document-container'>
                    {documents.map((doc,index) => (<DocumentItem key={index} document={doc} />))}
                </div>
            </div>
        </div>
    );
}

export default AllDocuments