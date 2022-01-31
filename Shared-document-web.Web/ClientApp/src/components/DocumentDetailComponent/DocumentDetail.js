import React, { useEffect, useState } from 'react'
import documentApi from '../../API/DocumentAPI'
import "./DocumentDetail.css"
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons"
import Button from '@mui/material/Button'
import ListComment from '../ListCommentComponent/ListComment'
import likeApi from '../../API/LikeAPI'
import Cookies from 'universal-cookie'
import { useSelector } from 'react-redux'
import { BaseURL } from '../../API/BaseUrl'

function DocumentDetail({id}) {
    const [documentDetail, setDocumentDetail] = useState({})
    const [listComment, setListComment] = useState(false)
    const [listLike, setListLike] = useState([])
    const [isLike, setIsLike] = useState(false)
    const cookies = new Cookies()
    const currentUser = useSelector(state => state.user)

    const style = {
        color: "#2f7af8",
    }
    
    useEffect(() => {
        const getDetail = async () => {
            const data = {id, keyword: ""}
            const res = await documentApi.getById(data)
            setDocumentDetail(res.data)
        }
        const getLike = async () => {
            const res = await likeApi.getAllLikeByDocument(id)
            if(res.data.find(({userId}) => userId === currentUser.userId)) setIsLike(true)
            setListLike(res.data)
        }
        getDetail()
        getLike()
    },[id,isLike])

    const handleLike = async () => {
        if(isLike) {
            const likeId = listLike.find(({userId}) => userId === currentUser.userId).likeId
            await likeApi.deleteLike(likeId)
            setIsLike(false)
        }
        if(!isLike) {
            await likeApi.addLike({
                userId: cookies.get('user').userId,
                documentId: id,
            })
            setIsLike(true)
        }
    }

    return (
        <div className='document-detail-section container-center'>
            <iframe src={`${BaseURL}${documentDetail.fileSource}`} className='preview-file'></iframe>
            <div className='document-title'>
                <div className='document-title-text'>
                    <h2>{documentDetail.documentName}</h2>
                    <div className='document-footer-title'>
                        <div className='document-upload-date'>{moment(documentDetail.uploadDate).locale('vn').format('DD/MM/YYYY')}</div>
                        <div className='document-number-like'>{documentDetail.views} lượt xem</div>
                    </div>
                </div>
                <div className='download-button'>
                    <Button variant="contained" size="small"><a href={`${BaseURL}${documentDetail.fileSource}`}>Tải tài liệu</a></Button>
                </div>
            </div>
            <div className='document-description'>{documentDetail.description}</div>
            <div className='document-reaction'>
                <div className='icon-react' onClick={handleLike}><FontAwesomeIcon icon={faHeart} style={isLike ? style : null}/> Thích</div>
                <div className='icon-react' onClick={() => setListComment(true)}><FontAwesomeIcon icon={faComment}/> Bình luận</div>
                <div className='icon-react'><FontAwesomeIcon icon={faShare}/> Chia sẻ</div>
            </div>  
            {listComment && <ListComment id={id} />}
        </div>
    )
}

export default DocumentDetail