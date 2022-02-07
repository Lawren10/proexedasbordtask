import React from "react"
import { useSelector, } from "react-redux";
import Userlist from "./components/Userlist"
import AddNewUser from "./components/AddNewUser"
import EditUser from "./components/EditUser";
import ConfirmModal from "./components/ConfirmModal";


function Proexetaskapp() {
  const userList = useSelector((state)=>{return state.display.userList})
  const newUser = useSelector((state)=>{return state.display.newUser})
  const editUser = useSelector((state)=>{return state.display.editUser})
  const deleteUser = useSelector((state)=>{return state.display.deleteUser})


    

  return (
    <div style={{position:'relative', height:'100%'}}>
      <header style={{display:"flex", placeContent:"center", padding:"2rem" }}>
        <h2 style={{width:"75%", fontSize:"2rem", fontWeight:"bold"}}>Dashbord</h2>
      </header>
      <Userlist userList={userList}/>
      <AddNewUser newUser={newUser}/>
      <EditUser editUser={editUser}/>
      <ConfirmModal deleteUser={deleteUser}/>
    </div>
  );
}

export default Proexetaskapp;
