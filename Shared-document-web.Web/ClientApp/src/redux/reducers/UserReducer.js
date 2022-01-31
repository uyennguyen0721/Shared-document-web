import * as Type from '../type/UserType.js';
let initialState = {
    listUser: null,
    err: null,
    loading: true
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.POST_USER_REQUEST: {
            state.loading = true;
            state.err = null;
            state.listUser = null;
            return { ...state };
        }
        case Type.POST_USER_SUCCESS: {
            state.loading = false;
            state.listUser = action.data;
            return { ...state };
        }
        case Type.POST_USER_FAILED: {
            state.loading = false;
            state.err = action.data;
            return { ...state };
        }

        default:
            return { ...state };
    }
}

export default UserReducer;