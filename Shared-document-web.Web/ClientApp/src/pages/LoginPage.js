import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Login from '../components/LoginComponent/Login'
import { useSelector} from 'react-redux'

function LoginPage() {
    const cookies = new Cookies()
    const history = useHistory()
    const currentUser = useSelector((state) => state.user) 
    
    useEffect(() => {
        if(currentUser.isLoggedIn) history.push("/")
    },[currentUser])

    return (
        <React.Fragment>
            <Login />
        </React.Fragment>
    );
}

export default LoginPage