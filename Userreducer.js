import {fetching, 
        fetchingSuccess,
        fetchingError,
        edit,
        addUser,
        deleteUser,
        addnumid} from './Useractions'



const UserState= {
    
        fetching:false,
        userData : [],
        editData:{},
        useridnum: 10,
        error:''
    
}

const userReducer = (state = UserState, action)=>{
    if(action.type === fetching){
        return {
            ...state, fetching:true
        }
    }
    
    if(action.type === fetchingSuccess){
        return {
            ...state, fetching:false, userData:action.payload
        }
    }

    if(action.type === fetchingError){
        return {
            ...state, fetching:false, error:action.payload
        }
    }

    if(action.type === edit){
        let currentData =state.userData.filter((item)=>{return item.id === parseInt(action.payload)})
        currentData = currentData[0];
        return {
            ...state, editData: currentData
        }
    }


    if(action.type === addnumid){
        return {
            ...state, useridnum: state.useridnum + 1
        }
    }

    if(action.type === addUser){
        state.userData.push(action.payload)
        return {
            ...state
        }
    }

    if(action.type === deleteUser){
    let newUserList = state.userData.filter((item)=>{return item.id !== parseInt(action.payload);})
        return {
            ...state, userData : newUserList
        }
    }

    return state;
    }

export default userReducer