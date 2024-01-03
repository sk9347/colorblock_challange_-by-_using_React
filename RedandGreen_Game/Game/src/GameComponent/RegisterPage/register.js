import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,

 
}from 'mdb-react-ui-kit';
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const RegisterPage=()=>{

const [name,setname]=useState("")
const [email,setemail]=useState("")
const [mobile,setmobile]=useState("")
const [passw,setpassw]=useState("")


const namehandle=(event)=>{
  setname(event.target.value)
  
}
const emailhandle=(event)=>{
  setemail(event.target.value)
}
const mobilehandle=(event)=>{
  setmobile(event.target.value)
}
const passhandle=(event)=>{
  setpassw(event.target.value)
  console.log(event.target.value)
}



  const nav=useNavigate()


  const navhandle=(event)=>{
    event.preventDefault()

    const data={
      username:name,
      emailid:email,
      mobileno:mobile,
      password:passw
    }
    console.log(data)
    if(name==="" || email==="" || mobile===""){
      alert('please fill the emty box')
    }else{
    nav("/pregame")
    }
  localStorage.setItem("data",JSON.stringify(data))
    
  }

    return(
        <>

    <div>hello</div>
  
    <MDBContainer fluid style={{height:"100vh"}} >
      
      <MDBCard className='text-black m-5' style={{borderRadius: '25px',height:"70%"}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <form onSubmit={navhandle}>
              <h1>Register</h1>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput  id='form3Example1' label='Full name' value={name} onChange={namehandle} placeholder='Enter Name'/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Mobile No' value={mobile} onChange={mobilehandle} placeholder='Enter Mobile number'/>
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-3' type='email' id='form3Example3' label='Email address' value={email} onChange={emailhandle} placeholder='Enter valid Email' />
      

           <Button variant="primary" type='submit'>Register</Button>{' '}

      
  
      </form>
            </MDBCol>


            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>


    
        </>
    )
}
export default RegisterPage