import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Container, 
        FlexWrapper,
        Header,
        Button,
        ListContainer,
        TableHeader,
        TableRowBody,
        Tabledata,
        EditButton,
        DeleteButton
        } from "../styled component/components"

import {displayAddNewUser, displayEditUser, displayConfirmDelete, confirmUserToDelete } from '../Redux/Displaystate/displayactions'
import { getUser,editUserList } from '../Redux/Userstate/Useractions';


function Userlist({userList}) {
const dispatch = useDispatch()
const allUserData = useSelector((state)=>{return state.user.userData })


useEffect(() => {
    dispatch(getUser())

    
},[]);

let deleteUserfunc = (e)=>{
    dispatch(confirmUserToDelete(e.target.id))
    dispatch(displayConfirmDelete())
    
}

let handleEditFunc = (e)=>{
    dispatch(editUserList(e.target.id))
    dispatch(displayEditUser())
}

  return (
        <section style={{display:`${userList? 'block':'none'}`}}>
            <FlexWrapper>
                <Container>
                    <Header>
                        <p>User List</p>
                        <Button onClick={()=>{dispatch(displayAddNewUser())}}>Add new</Button>
                    </Header>
                    <ListContainer>
                        <table style={{width:"100%",borderCollapse:"collapse"}}>
                            <thead>
                            <tr style={{backgroundColor:"#D7D7D7"}}>
                                    <TableHeader>Id</TableHeader>
                                    <TableHeader>Name</TableHeader>
                                    <TableHeader>Username</TableHeader>
                                    <TableHeader>Email</TableHeader>
                                    <TableHeader>City</TableHeader>
                                    <TableHeader>Edit</TableHeader>
                                    <TableHeader>Delete</TableHeader>
                                </tr>
                            </thead>
                                
                                <tbody>
                                    {
                                        allUserData.map((item, index)=>{
                                            return(
                                                <TableRowBody key={`${item.id? item.id : ''}`}>
                                                <Tabledata>{`${item.id? item.id : ''}`}</Tabledata>
                                                <Tabledata>{item.name}</Tabledata>
                                                <Tabledata>{item.username}</Tabledata>
                                                <Tabledata>{item.email}</Tabledata>
                                                <Tabledata>{`${item.address.city? item.address.city : ''}`}</Tabledata>
                                                <Tabledata><EditButton id={`${item.id? item.id : ''}`} onClick={(e)=>{handleEditFunc(e)}}>Edit</EditButton></Tabledata>
                                                <Tabledata><DeleteButton id={`${item.id? item.id : ''}`} onClick={(e)=>{deleteUserfunc(e)}}>Delete</DeleteButton></Tabledata>
                                                </TableRowBody>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                        </table>
                    </ListContainer>
                </Container>
            </FlexWrapper>
        </section>
  );
}

export default Userlist;
