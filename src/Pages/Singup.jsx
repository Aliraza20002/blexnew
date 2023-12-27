import React from 'react';
import "../Style/Signup.css"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

const Singup = () => {
  const containerStyle = {
    padding: '11.5rem',
  }
    return (
      <div className='continer-wrap'>
    <div className='regsiter-cont' >
      <MDBContainer fluid className='p-4' style={containerStyle}>
    
    <MDBRow>
     
     <div className='rigester-text'>
     <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

<h1 className="my-5 display-3 fw-bold ls-tight px-3">
Unlock a world of possibilities  <br />
  <span className="text-primary">with Blex7!</span>
</h1>

<p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
Sign up now to access our vast supplier network, offering millions of products tailored to your unique needs. Streamline your sourcing journey and make every purchase a breeze."
</p>

</MDBCol>
     </div>
    
   
   <div className='reister-card'>
   <MDBCol md='6'>

<MDBCard className='my-5' style={{width:'70rem'}}>
  <MDBCardBody className='p-5'>

    <MDBRow>
      <MDBCol col='6'>
        <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
      </MDBCol>

      <MDBCol col='6'>
        <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
      </MDBCol>
    </MDBRow>

    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

    <div className='d-flex justify-content-center mb-4'>
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
    </div>

  <Link to="/home"> <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn> </Link>  

    <div className="text-center">

      <p>or sign up with:</p>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='facebook-f' size="sm"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='twitter' size="sm"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='google' size="sm"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
        <MDBIcon fab icon='github' size="sm"/>
      </MDBBtn>

    </div>

  </MDBCardBody>
</MDBCard>

</MDBCol>
   </div>
 

    </MDBRow>

  </MDBContainer>
      </div>
      </div>
  

      );
    }
export default Singup



