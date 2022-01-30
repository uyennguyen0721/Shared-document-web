import React, { useEffect, useState } from 'react'
import commenttApi from '../../API/CommentAPI'
import "./ListComment.css"
import moment from 'moment'
import Cookies from 'universal-cookie'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import {useForm} from 'react-hook-form'
import { Button } from '@mui/material'


function ListComment({id}) {
    const [comments,setComment] = useState([])
    const cookies = new Cookies()
    const { register, handleSubmit} = useForm()

    useEffect(() => {
        const getComment = async () => {
            const res = await commenttApi.getAllCommentByDocument(id)
            setComment(res.data)
        }
        getComment()
    },[])

    const onsubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='list-comment-section'>
            {
                cookies.get('user') && <form onSubmit={handleSubmit(onsubmit)} className="form-comment radius-10">
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Nhập bình luận"
                        style={{ width: "100%" }}
                        class='comment-input'
                        {...register('content')}
                    />
                    <div className='send-btn'>
                        <Button variant="contained" >Gửi</Button>
                    </div>
                </form>
            }
            {
                comments.map((cmt,index) => (
                    <div className='comment-item radius-10' key={index}>
                        <div>{cmt.userId}</div>
                        <div>{cmt.contents}</div>
                        <div>{moment(cmt.commentDate).fromNow()}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListComment