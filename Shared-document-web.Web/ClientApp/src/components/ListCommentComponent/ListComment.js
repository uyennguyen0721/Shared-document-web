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
    const [reRender, setReRender] = useState(false)
    const cookies = new Cookies()
    const { register, handleSubmit, reset} = useForm()

    useEffect(() => {
        const getComment = async () => {
            const res = await commenttApi.getAllCommentByDocument(id)
            setComment(res.data)
        }
        getComment()
    },[reRender])

    const onsubmit = async (data) => {
        data = {
            ...data,
            userId: cookies.get('user').userId,
            documentId: id,
        }
        await commenttApi.addComment(data)
        reset({
            contents: ''
        })
        setReRender((prev) => !prev)
    }

    return (
        <div className='list-comment-section'>
            {
                cookies.get('user') && <form onSubmit={handleSubmit(onsubmit)} className="form-comment radius-10">
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Nhập bình luận"
                        style={{ width: "100%"}}
                        className='comment-input'
                        {...register('contents')}
                        required
                    />
                    <div className='send-btn'>
                        <Button variant="contained" type='submit'>Gửi</Button>
                    </div>
                </form>
            }
            {
                comments.map((cmt,index) => (
                    <div className='comment-item radius-10' key={index}>
                        <div>{cmt.userName}</div>
                        <div>{cmt.contents}</div>
                        <div>{moment(cmt.commentDate).fromNow()}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListComment