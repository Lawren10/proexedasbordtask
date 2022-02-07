// action types variable declerations
export const NewUser = "NEW-USER"
export const EditUser = "EDIT-USER"
export const UserList = "USER-LIST"
export const ConfirmDelete = "CONFIRM-DELETE"
export const ConfirmDeleteid = "CONFIRM-DELETE-ID"



// action function grenerators defination


export const displayAddNewUser = () =>{
    return {
        type: NewUser
    }
}

export const displayEditUser = () =>{
    return {
        type: EditUser
    }
}


export const displayUserList = () =>{
    return {
        type: UserList
    }
}

export const displayConfirmDelete = () =>{
    return {
        type: ConfirmDelete
    }
}

export const confirmUserToDelete = (id) =>{
    return {
        type: ConfirmDeleteid,
        payload:id
    }
}