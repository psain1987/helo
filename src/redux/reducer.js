
const initialState = {
    username: {},
    id: '',
    profilePic: 
}

const LOGIN_USER = 'LOGIN_USER'

export function builder(id, username, profilePic){
    return {
        type: LOGIN_USER,
        payload: id, username, profilePic
    }
}



export default function (state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, [id, username, profilePic]: action.payload}
        default:
            return state
    }
}