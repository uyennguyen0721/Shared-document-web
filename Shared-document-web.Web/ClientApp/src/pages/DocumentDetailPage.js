import React from 'react'
import { useParams } from 'react-router-dom'
import DocumentDetail from '../components/DocumentDetailComponent/DocumentDetail'

function DocumentDetailPage() {
    const {id} = useParams()

    return (
        <React.Fragment>
            <DocumentDetail id={id} />
        </React.Fragment>
    )
}

export default DocumentDetailPage