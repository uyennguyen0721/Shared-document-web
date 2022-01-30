import React, { useEffect, useState } from 'react'
import documentApi from '../../API/DocumentAPI'
import "./DocumentDetail.css"
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons"
import Button from '@mui/material/Button'
import ListComment from '../ListCommentComponent/ListComment'

function DocumentDetail({id}) {
    const [documentDetail, setDocumentDetail] = useState({})
    
    useEffect(() => {
        const getDetail = async () => {
            const data = {id, keyword: ""}
            const res = await documentApi.getById(data)
            console.log(res)
            setDocumentDetail(res.data)
        }
        getDetail()
    },[id])

    return (
        <div className='document-detail-section container-center'>
            <div></div>
            <div className='document-title'>
                <div className='document-title-text'>
                    <h2>{documentDetail.documentName}</h2>
                    <div className='document-footer-title'>
                        <div className='document-upload-date'>{moment(documentDetail.uploadDate).locale('vn').format('DD/MM/YYYY')}</div>
                        <div className='document-number-like'>{documentDetail.likes && documentDetail.likes.length} lượt thích</div>
                        <div className='document-number-comments'>{documentDetail.comments && documentDetail.comments.length} lượt bình luận</div>
                    </div>
                </div>
                <div className='download-button'>
                    <Button variant="contained" size="small">Tải tài liệu</Button>
                </div>
            </div>
            <div className='document-description'>{documentDetail.description}</div>
            <div className='document-reaction'>
                <div className='icon-react'><FontAwesomeIcon icon={faHeart}/> Thích</div>
                <div className='icon-react'><FontAwesomeIcon icon={faComment}/> Bình luận</div>
                <div className='icon-react'><FontAwesomeIcon icon={faShare}/> Chia sẻ</div>
            </div>  
            <ListComment id={id} />
        </div>
    )
}

export default DocumentDetail