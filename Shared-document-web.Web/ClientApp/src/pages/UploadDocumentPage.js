import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'
import UploadDocument from '../components/UploadDocumentComponent/UploadDocument'

function UploadDocumentPage() {
    const history = useHistory()
    const cookies = new Cookies()

    useEffect(() => {
        if(!cookies.get('user')) history.push("/login")
    },[])

    return (
        <React.Fragment>
            <UploadDocument />
        </React.Fragment>
    )
}

export default UploadDocumentPage