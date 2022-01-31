import * as Type from '../type/UserType.js';
import userApi from '../../API/UserAPI';
import { Modal } from 'antd';

const notification = (type, mess, action) => {
    return Modal[type]({
        content: mess,
        onOk() {
            if (action) {
                return action()
            }
        },
        onCancel() {

        },
    })
}
export const postListUser = () => {
    return (dispatch) => {
        dispatch(postListUserRequest())
        setTimeout(() => {
            userApi.postAllUser().then((rs) => {
                console.log(rs.data)
                console.log(5)
                dispatch(postListUserSuccess(rs.data))
            }).catch((err) => {
                dispatch(postListUserFailed(err.response))
            })
        }, 800);
    }
}
const postListUserRequest = () => {
    return {
        type: Type.POST_USER_REQUEST
    }
}
const postListUserSuccess = (data) => {
    return {
        type: Type.POST_USER_SUCCESS,
        payload: data
    }
}
const postListUserFailed = (err) => {
    return {
        type: Type.POST_USER_FAILED,
        payload: err
    }
}
export const deleteUser = (id) => {
    return (dispatch) => {
        dispatch(deleteUserRequest())
        userApi.deleteUser(id).then((rs) => {
            dispatch(deleteUserSuccess(rs.data));
            notification("success", "Delete Successfully", () => {
                dispatch(postListUser());
            })
        }).catch((err) => {
            dispatch(deleteUserFailed(err.response));
            notification("error", "Delete Failed")
        })
    }

}

const deleteUserRequest = () => {
    return {
        type: Type.DELETE_USER_REQUEST
    }
}
const deleteUserSuccess = (data) => {
    return {
        type: Type.DELETE_USER_SUCCESS,
        payload: data
    }
}
const deleteUserFailed = (err) => {
    return {
        type: Type.DELETE_USER_FAILED,
        payload: err
    }
}

