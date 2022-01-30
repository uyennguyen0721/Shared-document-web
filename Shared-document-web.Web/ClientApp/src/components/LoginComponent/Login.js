import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import userApi from '../../API/UserAPI'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'
import {useDispatch } from 'react-redux'
import {setUser} from '../../redux/reducers/UserSlice'



function Login() {
    const { register, handleSubmit} = useForm()
    const [errorMsg, setErrorMsg] = useState("")
    const history = useHistory()
    const cookies = new Cookies()
    const dispatch = useDispatch()

    const onSubmit = async (data) => {
        const formData = new FormData()
        Object.keys(data).forEach(key => formData.append(key, data[key]))
        const res = await userApi.login(formData)
        console.log(res)
        if(res.data.length > 0) {
            cookies.set('user',res.data[0], { path: '/' })
            dispatch(setUser(cookies.get('user')))
            history.push('/')
        }
        if(res.data.length === 0) setErrorMsg("Tên tài khoản hoặc mật khẩu không đúng")
    }

    return (
        <div className="wrapper fadeInDown login-section">
            <div id="formContent">
                <div className="fadeIn first">
                    <h2> Đăng nhập </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <input type="text" id="login" className="fadeIn second"  placeholder="Tên đăng nhập" {...register('username')} required/>
                    <input type="password" id="password" className="fadeIn third" placeholder="Mật khẩu" {...register('password')} required/>
                    <p className='error-message'>{errorMsg}</p>
                    <input type="submit" className="fadeIn fourth" value="Đăng nhập" />
                    <p>Chưa có tài khoản ? </p><Link to="/register" className='register-link'>Đăng kí ngay!</Link>
                </form>

            </div>
        </div>
    )
}

export default Login