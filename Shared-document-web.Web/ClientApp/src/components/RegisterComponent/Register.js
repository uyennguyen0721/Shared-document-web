import React, { useState } from 'react'
import '../LoginComponent/Login.css'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import userApi from '../../API/UserAPI'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'
import {useDispatch } from 'react-redux'
import {setUser} from '../../redux/reducers/UserSlice'
import moment from 'moment'


function Login() {
    const { register, handleSubmit} = useForm()
    const [errorMsg, setErrorMsg] = useState("")
    const history = useHistory()

    const onSubmit = async (data) => {
        const formData = new FormData()
        data = {
            ...data,
            UserRoleId: 2,
            UserRole: 2,
        }
        Object.keys(data).forEach(key => formData.append(key, data[key]))
        await userApi.register(formData)
    }

    return (
        <div className="wrapper fadeInDown login-section" style={{marginTop: "20px"}}>
            <div id="formContent">
                <div className="fadeIn first">
                    <h2> Đăng Ký </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} >
                <input type="text" id="login" className="fadeIn second"  placeholder="Họ tên" {...register('Name')} required/>
                <input type="text" id="login" className="fadeIn second"  placeholder="Tên đăng nhập" {...register('Username')} required/>
                <input type="email" id="login" className="fadeIn third" placeholder="Email" {...register('Email')} required/>
                <input type="password" id="password" className="fadeIn third" placeholder="Mật khẩu" {...register('Password')} required/>
                <select type="text" id="login" className="fadeIn second select-register"  placeholder="Tên đăng nhập" {...register('Gender')}>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                </select>
                <input type="date" id="login" className="fadeIn second" {...register('Bỉrthday')} required/>
                <input type="file" id="login" className="fadeIn second" {...register('Avatar')} required/>
                <p className='error-message'>{errorMsg}</p>
                <input type="submit" className="fadeIn fourth" value="Đăng ký" />
                </form>

            </div>
        </div>
    )
}

export default Login