import React, {useState, useEffect, useRef} from 'react';
import {FlexWrapper,
        Container,
        Header,
        AddEditWrapper,
        ItemContainer,
        Input,
        CancelButton,
        SubmitButton} from "../styled component/components"

import { useDispatch, } from "react-redux";
import {displayUserList} from '../Redux/Displaystate/displayactions'
import { addToUserList} from '../Redux/Userstate/Useractions';

let userid = 10;

function AddNewUser({newUser}) {
const pt1 = useRef(null)
const pt2 = useRef(null)
const pt3 = useRef(null)
const [addnewUser, setaddnewUser] = useState({ id:'', name:'', username:'', email:'', address:{city:''}})
const [addnewUsererror, setaddnewUsererror] = useState({})
const [ok, setOk] = useState(false)
const dispatch = useDispatch()


useEffect(()=>{
    if(Object.keys(addnewUsererror).length === 0 && ok){
        userid = userid + 1
        dispatch(addToUserList({...addnewUser, id:userid}))
        setaddnewUser({...addnewUser, id:'', name:'', username:'', email:'', address:{city:''}})
        dispatch(displayUserList())
    }
}, [addnewUsererror,ok])





const handlechange = (e)=>{
    const {name, value} = e.target
    setaddnewUser({...addnewUser, [name]: value})
}

const handleCancleadduser = ()=>{
    pt1.current.innerText = ""
    pt2.current.innerText = ""
    pt3.current.innerText = ""
    setaddnewUser({...addnewUser, id:'', name:'', username:'', email:'', address:{city:''}})
    dispatch(displayUserList())
}


const validateuserinput = (userinput)=> {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors  = {}
    if(!userinput.name){
        errors.name = 'please name is required'
        pt1.current.innerText = "please name is required"
    }
    if(!userinput.username){
        errors.username = 'please username is required'
        pt2.current.innerText = "please username is required"
    }
    
    if(!userinput.email){
        errors.email = 'please email is required'
        pt3.current.innerText = "please email is required"
    }
    if(!regex.test(userinput.email)){
        errors.email = 'please a valid email is required'
        pt3.current.innerText = "please a valid email is required"
    }
    return errors
}

const handleAddNewUser = ()=>{

    setaddnewUsererror(validateuserinput(addnewUser))
    setOk(true)
    
    }


  return (
    <>
        <section style={{display:`${newUser? 'block':'none'}`}} >
        <FlexWrapper>
                <Container>
                    <Header>
                        <p>Addd New User</p>
                    </Header>
                    <AddEditWrapper>
                        <ItemContainer>
                            <label style={{fontSize:'0.8rem'}}>Name</label>
                            <div style={{width:'70%'}}> 
                            <Input name='name' value={addnewUser.name} onChange={handlechange}/>
                            <p ref={pt1}>{addnewUsererror.name}</p>
                            </div>
                            
                        </ItemContainer>

                        <ItemContainer>
                            <label style={{fontSize:'0.8rem'}}>User Name</label>
                            <div style={{width:'70%'}}>
                            <Input name='username' value={addnewUser.username} onChange={handlechange}/>
                            <p ref={pt2}>{addnewUsererror.username}</p>
                            </div>
                            
                        </ItemContainer>

                        <ItemContainer>
                            <label style={{fontSize:'0.8rem'}}>Email</label>
                            <div style={{width:'70%'}}>
                            <Input name='email' value={addnewUser.email} onChange={handlechange}/>
                            <p ref={pt3}>{addnewUsererror.email}</p>
                            </div>
                            
                        </ItemContainer>

                        <div style={{display:'flex', gap:'1.5rem', marginTop:'2rem', justifyContent:'flex-end', width:'100%'}}>
                            <CancelButton onClick={handleCancleadduser}>Cancel</CancelButton>
                            <SubmitButton onClick={handleAddNewUser}>Submit</SubmitButton>
                        </div>
                    </AddEditWrapper>
                </Container>
            </FlexWrapper>
        </section>
        
    </>
    );
}

export default AddNewUser;
