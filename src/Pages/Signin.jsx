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

const Signin = () => {
   
        return (
          <div className='continer-wrap'>
          <div className='singup-cont' >
          <MDBContainer fluid className='p-4'>
        
        <MDBRow>
    
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
    
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            <br />
              <span className="text-primary"> "Welcome back to Blex7!</span>
            </h1>
    
            <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Log in to manage your sourcing activities seamlessly. Your trusted gateway to a vast supplier network and efficient procurement awaits."
            </p>
    
          </MDBCol>
    
          <MDBCol md='6'>
    
            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
    
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
    
           
                  <Link to="/home">
                  <MDBBtn className='w-100 mb-4' size='md'>sign In</MDBBtn>
                  </Link>
              
    
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
    
        </MDBRow>
    
      </MDBContainer>
          </div>
          </div>
    
          );
        }

export default Signin