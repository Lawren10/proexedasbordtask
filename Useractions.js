import axios from 'axios'


export const fetching = "FETCHING"
export const fetchingSuccess = "FETCHING-SUCCESS"
export const fetchingError = "FETCHING-ERROR"
export const edit = "EDIT"
export const addUser = "ADD-USER"
export const deleteUser = "DELETE-USER"
export const addnumid = "ADD-NUM-ID"


export const resumeFetching = ()=>{
    return{
        type:fetching 
    }
}


export const fetchSuccess = (data)=>{
    return{
        type:fetchingSuccess, 
        payload: data
    }
}


export const fetchError = (error)=>{
    return{
        type:fetchingError, 
        payload: error
    }
}

export const editUserList = (editId)=>{
    return{
        type:edit,
        payload:editId 
    }
}

export const addToUserList = (newUserData)=>{
    return{
        type:addUser ,
        payload:newUserData
    }
}

export const addId = ()=>{
    return{
        type:addnumid 
    }
}


export const deleteFromUserList = (id)=>{
    return{
        type:deleteUser,
        payload:id
    }
}

export const getUser = ()=>{
    return async (dispatch)=>{
        dispatch(resumeFetching())
        try {
            let response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
            dispatch(fetchSuccess(response.data))
        } catch (error) {
            dispatch(fetchError(error.message))
        }
    }
}