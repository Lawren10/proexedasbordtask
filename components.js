import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
body{
    width:100vw;
    height:100vh;
    overflow-x:hidden;
}
*{
    font-family:'Roboto', sans-serif;
    box-sizing: border-box;
    padding:0;
    margin:0;
}

`



export const FlexWrapper = styled.section`
width:100vw;
display:grid;
place-items:center;

`

export const Container = styled.main`
width:70%;
border-radius:0.5rem;
padding:1.5rem;
background-color:white;
box-shadow:0.2rem 0.2rem 0.3rem 0.2rem rgba(236, 237, 237)

@media screen (maxwidth:768px){
    width:85%;
}
`

export const Header = styled.header`
padding:0.5rem;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid darkGrey;
`

export const ListContainer = styled.div`
border:1px solid rgba(236, 237, 237);
margin-top:1rem;
overflow-x:auto;
`

export const TableHeader = styled.th`
font-size:0.8rem;
padding:1rem;
`

export const TableRowBody = styled.tr`
&:hover{
    background-color:#F7F7F7;
}
`

export const Tabledata = styled.td`
font-size:0.8rem;
padding:1rem;
text-align:center;
`


export const Button = styled.button`
padding:0.5rem 1rem;
background-color:#1859B4;
font-weight:bold;
font-size: 0.9rem;
outline:none;
border:none;
border-radius: 0.3rem;
cursor:pointer;
color:white;
`

export const EditButton = styled.button`
padding:0.5rem 1rem;
background-color:#FDD75C;
font-weight:bold;
outline:none;
border:none;
border-radius: 0.3rem;
cursor:pointer;
color:white;
`

export const DeleteButton = styled.button`
padding:0.5rem 1rem;
background-color:#DD201D;
font-weight:bold;
outline:none;
border:none;
border-radius: 0.3rem;-
cursor:pointer;
color:white;
`

export const ModalWrapper = styled.section`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
display:grid;
place-items:center;
background-color: blue;

`

export const AddEditWrapper = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
padding:0.5rem;
margin-top:1rem;
gap:1rem;

@media screen and (max-width:768px){
    align-items:center;
}
`

export const ItemContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:80%;

@media screen and (max-width:768px){
    width:100%;
}

`

export const Input = styled.input`
padding:1rem;
border-radius:0.5rem;
width:100%;
border: 1px solid rgba(236, 237, 237);
outline:none;
`

export const CancelButton = styled.button`
padding:0.5rem 1rem;
background-color:white;
font-weight:bold;
font-size: 0.9rem;
outline:none;
border: 1px solid #DD201D;
border-radius: 0.3rem;-
cursor:pointer;
color:#DD201D;
`

export const SubmitButton = styled.button`
padding:0.5rem 1rem;
background-color:#19A529;
font-weight:bold;
font-size: 0.9rem;
outline:none;
border:none;
border-radius: 0.3rem;
cursor:pointer;
color:white;`


export const ConfirmModalWrapper = styled.section`
position:absolute;
top:0;
left:0;
display:grid;
height:100%;
place-items:center;
background-color:rgba(12, 13, 12, 0.3)

`

export const ModalContainer = styled.main`
width:25%;
border-radius:0.5rem;
padding:1.5rem;
background-color:white;
`