import React, { useEffect, useState } from 'react'
import documentApi from '../API/DocumentAPI'
import AllDocuments from '../components/AllDocumentsComponent/AllDocuments'

function SearchResultPage() {
    const queryParams = new URLSearchParams(window.location.search)

    const keyword = queryParams.get('keyword')

    const [documents,setDocuments] = useState([])

    useEffect(() => {
        const getdata = async () => {
            const res = await documentApi.searchDocument(keyword)
            console.log(res.data)
            setDocuments(res.data.data)
        }

        getdata()
    },[keyword])

    return (
        <React.Fragment>
            <AllDocuments documents={documents} title={`Kết quả cho từ khóa "${keyword}"`}/>
        </React.Fragment>
    )
}

export default SearchResultPage