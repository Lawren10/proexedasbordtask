import React from 'react';
import { ModalContainer,
    CancelButton,
    SubmitButton,
    ConfirmModalWrapper} from "../styled component/components"

import { useDispatch, useSelector } from "react-redux";
import {displayUserList} from '../Redux/Displaystate/displayactions'
import {deleteFromUserList} from '../Redux/Userstate/Useractions'


function ConfirmModal({deleteUser}) {
const deleteid = useSelector((state)=>{return state.display.deleteUserId})

const dispatch = useDispatch()
 
const confirmDeleteFunc = ()=>{
    dispatch(deleteFromUserList(deleteid))
    dispatch(displayUserList())
}

  return (
    <div style={{display:`${deleteUser? 'block':'none'}`}}>
        <ConfirmModalWrapper>
            <div style={{width:'100vw', height:'100%', display:'flex' , justifyContent:'center', alignItems:'center'}}>
            <ModalContainer>
                <p style={{fontSize:'0.8rem', width:'100%', textAlign:'center'}}>Are you sure you want to delete this user</p>
                <div style={{display:'flex', gap:'1.5rem', marginTop:'2rem', justifyContent:'center'}}>
                    <CancelButton onClick={()=>{dispatch(displayUserList())}}>Cancel</CancelButton>
                    <SubmitButton onClick={()=>{confirmDeleteFunc()}}>Delete</SubmitButton>
                </div>
            </ModalContainer>
            </div>
            
        </ConfirmModalWrapper>
    </div>);
}

export default ConfirmModal;
