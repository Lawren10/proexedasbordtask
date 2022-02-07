
import { NewUser, 
        EditUser,
        UserList,
        ConfirmDelete,
        ConfirmDeleteid
        } from "./displayactions";


let displayState = {
    userList: true,
    newUser : false,
    editUser : false,
    deleteUser : false,
    deleteUserId:-1
}


const displayReducer = ( state = displayState, action) =>{
switch (action.type) {
    case NewUser: return{...state, userList: false, newUser : true, editUser : false, deleteUser : false, }
    case EditUser: return{...state, userList: false, newUser : false, editUser : true, deleteUser : false,  }
    case ConfirmDelete: return{...state, userList: true, newUser : false, editUser : false, deleteUser : true,   }
    case UserList: return{...state, userList: true, newUser : false, editUser : false, deleteUser : false, }
    case ConfirmDeleteid: return{...state, deleteUserId:action.payload}
    default: return state
}


} 

export default displayReducer


