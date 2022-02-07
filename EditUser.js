import React, {useEffect, useState, useRef} from 'react';
import {FlexWrapper,
    Container,
    Header,
    AddEditWrapper,
    ItemContainer,
    Input,
    CancelButton,
    SubmitButton} from "../styled component/components"

import { useDispatch, useSelector} from "react-redux";
import {displayUserList} from '../Redux/Displaystate/displayactions'
// import { editUserList } from '../Redux/Userstate/Useractions';

function EditUser({editUser}) {
const p1 = useRef(null)
const p2 = useRef(null)
const p3 = useRef(null)
const [editcurrentUser, seteditcurrentUser] = useState({ id:'', name:'', username:'', email:'', address:{city:''}})
const [editcurrentUsererror, seteditcurrentUsererror] = useState({})
const [ok, setOk] = useState(false)
const dataToEdit = useSelector((state)=>{return state.user.editData})
const dispatch = useDispatch()



useEffect(()=>{
    if(Object.keys(editcurrentUsererror).length === 0 && ok){
        dataToEdit.name = editcurrentUser.name
        dataToEdit.username = editcurrentUser.username
        dataToEdit.email = editcurrentUser.email
        dataToEdit.address.city = editcurrentUser.address.city 
        seteditcurrentUser({...editcurrentUser, id:'', name:'', username:'', email:'', address:{city:''}})
        dispatch(displayUserList())
    }
}, [editcurrentUsererror, ok])


const handleCancle = ()=>{
    p1.current.innerText = ""
    p2.current.innerText = ""
    p3.current.innerText = ""
    seteditcurrentUser({...editcurrentUser, id:'', name:'', username:'', email:'', address:{city:''}})
    dispatch(displayUserList())
}


const handlechange = (e)=>{
    const {name, value} = e.target
    seteditcurrentUser({...editcurrentUser, [name]: value})

}

const handleeditcurrentUser = ()=>{

seteditcurrentUsererror(validateuserinput(editcurrentUser))
setOk(true)

}

const validateuserinput = (userinput)=> {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors  = {}
    if(!userinput.name){
        errors.name = 'please name is required'
    }
    if(!userinput.username){
        errors.username = 'please username is required'
    }
    
    if(!userinput.email){
        errors.email = 'please email is required'
    }
    if(!regex.test(userinput.email)){
        errors.email = 'please a valid email is required'
    }
    return errors;
}



    return (
        <>
            <section style={{display:`${editUser? 'block':'none'}`}}>
            <FlexWrapper>
                    <Container>
                        <Header>
                            <p>Edit User</p>
                        </Header>
                        <AddEditWrapper>
                        <ItemContainer>
                            <label style={{fontSize:'0.8rem'}}>Name</label>
                            <div style={{width:'70%'}}>
                            <Input name='name' value={editcurrentUser.name} onChange={handlechange} placeholder={dataToEdit.name}/>
                            <p ref={p1}>{editcurrentUsererror.name}</p>
                            </div>
                            
                        </ItemContainer>

                        <ItemContainer>
                            <label style={{fontSize:'0.8rem'}}>User Name</label>
                            <div style={{width:'70%'}}>
                            <Input name='username' value={editcurrentUser.username} onChange={handlechange} placeholder={dataToEdit.username}/>
                            <p ref={p2}>{editcurrentUsererror.username}</p>
                            </div>
                            
                        </ItemContainer>

                        <ItemContainer>
                            <label style={{fontSize:'0.8rem'}}>Email</label>
                            <div style={{width:'70%'}}>
                            <Input name='email' value={editcurrentUser.email} onChange={handlechange} placeholder={dataToEdit.email}/>
                            <p ref={p3}>{editcurrentUsererror.email}</p>
                            </div>
                            
                        </ItemContainer>
    
                            <div style={{display:'flex', gap:'1.5rem', marginTop:'2rem', justifyContent:'flex-end', width:'100%'}}>
                                <CancelButton onClick={handleCancle}>Cancel</CancelButton>
                                <SubmitButton onClick = {handleeditcurrentUser}>Edit</SubmitButton>
                            </div>
                        </AddEditWrapper>
                    </Container>
                </FlexWrapper>
            </section>
            
        </>
        );
}

export default EditUser;
