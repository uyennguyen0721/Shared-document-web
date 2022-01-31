import React, { useEffect, useState } from 'react'
import "./UploadDocument.css"
import {useForm} from 'react-hook-form'
import subjectApi from '../../API/SubjectAPI'
import Select from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import Button from '@mui/material/Button'
import Cookies from 'universal-cookie'
import documentApi from '../../API/DocumentAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'

function UploadDocument() {
    const { register, handleSubmit, reset} = useForm()
    const [subject,setSubject] = useState([])
    const [subjectId,setSubjectId] = useState('')
    const cookies = new Cookies()
    const history = useHistory()

    useEffect(() => {
        const getAllSubject = async () => {
            const res = await subjectApi.getAllSubject()
            setSubject(res.data)
        }
        getAllSubject()
    },[])

    const onsubmit = async (data) => {
        const formData = new FormData()
        data = {
            ...data,
            UserId: cookies.get('user').userId,
            subjectId: subjectId,
            DocumentTypeId: 2,
        }
        console.log(data)
        Object.keys(data).forEach(key => formData.append(key, data[key]))
        const res = await documentApi.uploadDocument(formData)
        if(res.success) {
            reset({
                documentName: '',
                Description: '',
                ImagePreview: null,
                FileSource: null,
            })
            setSubjectId('')
            toast.success("Đăng tài liệu thành công, hãy chờ admin duyệt!", {position: "bottom-center",})
        }

    }

    const handleChange = (event) => {
        setSubjectId(event.target.value)
    }

    return (
        <div className='document-upload-section'>
            <div className='container-form'>
                <form className='form-upload radius-10' onSubmit={handleSubmit(onsubmit)}>
                    <h2>Đăng tài liệu</h2>
                    <input type="text" className='form-upload-input' placeholder='Tên tài liệu' {...register('documentName')} required />
                    <input type="text" className='form-upload-input' placeholder='Mô tả' {...register('Description')} required />
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={subjectId}
                            label="Lĩnh vực"
                            onChange={handleChange}
                        >
                            {
                                subject.map((sj) => (
                                    <MenuItem value={sj.subjectId} key={sj.subjectId}>{sj.subjectName}</MenuItem>
                                ))
                            }
                        </Select>
                    <label htmlFor="document-preview-upload" className='upload-form-table'>Chọn ảnh đại diện tài liệu</label>
                    <input type="file" id="document-preview-upload" {...register('ImagePreview')} required />
                    <label htmlFor="document-file-upload" className='upload-form-table'>Chọn file tài liệu</label>
                    <input type="file" id="document-file-upload" placeholder='Chọn file tài liệu' {...register('FileSource')} required />
                    <Button variant="contained" type='submit' className='submit-form-upload'>Đăng</Button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UploadDocument