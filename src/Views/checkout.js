import React from 'react'
import {useStore} from '../Component/store'
import {Container,Row,Col,Label,Form,Input,Button} from 'reactstrap'
import { Card } from 'reactstrap'
import { useForm } from 'react-hook-form';
import logo from '../Images/logo.png'
function Checkout() {
    const product = useStore(state => state.product)
    const { register, handleSubmit, errors } = useForm(); 
  const onSubmit = (data) => {
    console.log(data);
  };
    return (
        <div>
            <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className="cardalign" style={{
            position: 'absolute', left: '50%', top: '70%',
            transform: 'translate(-50%, -50%)',paddingBottom:'20px',
            color: 'white'}}>
                
      <Row style={{paddingTop:'20px'}}>
     <Col className="offset-md-2">
     <img className="logo" src={logo}/>
     </Col>
      </Row>
      <Row style={{paddingTop:'20px'}}>
      <Col md={4} >
       <Label className="form-control" id='name' style={{borderColor:'white'}}>Name</Label>
       </Col>
        <Col md={7} >
       <input className="form-control" name="name" type='text'  id='name' placeholder='Tony Stark' ref={register({required:'name is required'})}/>
       {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}
       </Col>
       </Row>
      <Row>
      <Col md={4} >
       <Label className="form-control" id='email' style={{borderColor:'white'}}>Email Id</Label>
       </Col>
        <Col md={7} >
       <input className="form-control" name="email" type='email'  id='email' placeholder='youremail@gmail.com' ref={register({required:'email is required' ,pattern:{value:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,message:'email not valid'}})}/>
       {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
       </Col>
       </Row>
       <Row>
      <Col md={4} >
       <Label className="form-control" id='mobile' style={{borderColor:'white'}}>Mobile No</Label>
       </Col>
        <Col md={7} >
       <input className="form-control" name="mobile" type='number'  id='mobile' placeholder='Mobile Number' ref={register({required:'mobile number required',pattern:{value:/^[0-9]{10}$/,message:'Invalid Mobile No'}})}/>
       {errors.mobile && <p style={{color:'red'}}>{errors.mobile.message}</p>}
       </Col>
       </Row>
       <Row>
      <Col md={4} >
       <Label className="form-control" id='address' style={{borderColor:'white'}}>Address</Label>
       </Col>
        <Col md={7} >
       <input className="form-control" name="address" type='text'  id='address' placeholder='Your Location' ref={register({required:'address is required'})}/>
       {errors.address && <p style={{color:'red'}}>{errors.address.message}</p>}
       </Col>
       <Col md={3} className="offset-md-5" style={{paddingTop:'20px'}}>
       <input type="submit" style={{backgroundColor:'green',color:'white'}}/>
       </Col>
       </Row>
       </div>
       </form>
       
       </Container>
        </div>
    )
}

export default Checkout;
 