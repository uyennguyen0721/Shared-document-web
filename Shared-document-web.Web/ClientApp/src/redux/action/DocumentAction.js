import * as Type from '../type/DocumentType.js';
import documentApi from '../../API/DocumentAPI';
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
export const getListDocument = () => {
    return (dispatch) => {
        dispatch(getListDocumentRequest())
        setTimeout(() => {
            documentApi.getAllDocument().then((rs) => {
                console.log(rs.data)
                dispatch(getListDocumentSuccess(rs.data))
            }).catch((err) => {
                dispatch(getListDocumentFailed(err.response))
            })
        }, 800);
    }
}
const getListDocumentRequest = () => {
    return {
        type: Type.GET_DOCUMENT_LIST_REQUEST
    }
}
const getListDocumentSuccess = (data) => {
    return {
        type: Type.GET_DOCUMENT_LIST_SUCCESS,
        payload: data
    }
}
const getListDocumentFailed = (err) => {
    return {
        type: Type.GET_DOCUMENT_LIST_FAILED,
        payload: err
    }
}
export const deleteDocument = (id) => {
    return (dispatch) => {
        dispatch(deleteDocumentRequest())
        documentApi.deleteDocument(id).then((rs) => {
            dispatch(deleteDocumentSuccess(rs.data));
            notification("success", "Delete Successfully", () => {
                dispatch(getListDocument());
            })
        }).catch((err) => {
            dispatch(deleteDocumentFailed(err.response));
            notification("error", "Delete Failed")
        })
    }

}

export const checkDocument = (id) => {
    return (dispatch) => {
        documentApi.checkDocument(id).then((rs) => {
            notification("success", "Phê duyệt thành công", () => {
                dispatch(getListDocument());
            })
        }).catch((err) => {
            notification("error", "Xảy ra lỗi!!!")
        })
    }

}
const deleteDocumentRequest = () => {
    return {
        type: Type.DELETE_DOCUMENT_REQUEST
    }
}
const deleteDocumentSuccess = (data) => {
    return {
        type: Type.DELETE_DOCUMENT_SUCCESS,
        payload: data
    }
}
const deleteDocumentFailed = (err) => {
    return {
        type: Type.DELETE_DOCUMENT_FAILED,
        payload: err
    }
}

