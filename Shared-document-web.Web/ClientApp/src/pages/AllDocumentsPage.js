import React, {useEffect, useState} from 'react'
import AllDocuments from '../components/AllDocumentsComponent/AllDocuments'
import documentApi from '../API/DocumentAPI'

function AllDocumentsPage() {
    const [documents, setDocument] = useState([])

    useEffect(() => {
        const getAll = async () => {
            const res = await documentApi.getAllDocument()
            setDocument(res.filter((doc) => doc.isCheck === true).sort((a,b) => b.uploadDate - a.uploadDate))
        }
        getAll()
    },[])

    return (
        <React.Fragment>
            <AllDocuments documents={documents} title={`Tất cả tài liệu`}/>
        </React.Fragment>
    );
}

export default AllDocumentsPage