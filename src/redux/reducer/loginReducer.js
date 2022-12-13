const initailState={
    isLogin:false,
    token:null,
    user:null,
    error:null,
    loading:false
}

export default (state=initailState,action)=>{
    switch(action.type){
        case 'LOGIN_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                loading:false,
                isLogin:true,
                token:action.payload.token,
                user:action.payload.user
            }
        case 'LOGIN_FAIL':
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                loading:false,
                isLogin:false,
                token:null,
                user:null
            }
        default:
            return state
    }
}