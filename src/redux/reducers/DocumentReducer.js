import * as Type from '../type/DocumentType.js';
let initialState = {
    listDocument: null,
    err: null,
    loading: true
}

const DocumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DOCUMENT_LIST_REQUEST: {
            state.loading = true;
            state.err = null;
            state.listDocument = null;
            return { ...state };
        }
        case Type.GET_DOCUMENT_LIST_SUCCESS: {
            state.loading = false;
            state.listDocument = action.data;
            return { ...state };
        }
        case Type.GET_DOCUMENT_LIST_FAILED: {
            state.loading = false;
            state.err = action.data;
            return { ...state };
        }
     
        default:
            return { ...state };
    }
}

export default DocumentReducer;