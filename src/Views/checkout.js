import React,{useState} from 'react'
import {useStore} from '../Component/store'
import {Container,Row,Col,Label} from 'reactstrap'
import { useForm } from 'react-hook-form'
import logo from '../Images/logo.png'
import '../Styles/style.css'
import axios from 'axios'
import deliver from '../Images/delivery-boy-delivering.jpg'
import thank from '../Images/thankyou.jpg'
function Checkout() {
  let items=[],count=[],total=0;
  const [loaded,setloaded]=useState(false)
    const product = useStore(state => state.product)
    const trash = useStore(state => state.trash)
    const { register, handleSubmit, errors } = useForm(); 
    product.map((item,key)=>{
      items.push(item._id)
      count.push(item.count)
      total+=item.total
    })
  const onSubmit = async (data) => {
   const res= await axios.post('http://13.233.120.227:8080/api/users/register',{ name:data.name,
    email:data.email,
    phoneNumber:data.mobile,
    address:data.address,
  paymentType:data.type })
  const response = await axios.post('http://13.233.120.227:8080/api/orders',{
    user:res.data._id,
    orderItems:items,
  orderItemsCount:count,
  taxPrice:0,
  shippingPrice:100,
  totalPrice:total
  })
  trash()
  setloaded(true)
};
if(loaded)
return(
<div>

  <Row style={{margin:'0px',paddingTop:'70px'}}>
      <Col md={5} className="offset-md-4 offset-sm-4 offset-xs-4">
      <img src={deliver} className="deliver"/>
      </Col>
      </Row> 
  <Row style={{margin:'0px',paddingTop:'30px',paddingBottom:'30px'}}>   
      <Col md={5} className="offset-md-4 offset-sm-4 offset-xs-4">
      <img src={thank} className="deliver" />
      </Col>
  </Row>
  <Row style={{margin:'0px',padding:'20px',alignItems:'center',justifyContent:'center'}}>
    <span style={{textAlign:'center'}}>
       We'll contact you before our next business day and we will let you know the time of delivery.  We will be calling you from +91 94442 22921.
    </span>
  </Row>
</div>
)
else
    return (
        <div>
            <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className="cardalign" style={{
            position: 'absolute', left: '50%', 
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
       <input className="form-control" name="mobile" type='text'  id='mobile' placeholder='Mobile Number' ref={register({required:'mobile number required',pattern:{value:/^[0-9]{10}$/,message:'Invalid Mobile No'}})}/>
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
       </Row>
       <Row>
      <Col md={4} >
       <Label className="form-control" id='type' style={{borderColor:'white'}}>Payment Type</Label>
       </Col>
        <Col md={7} >
        <select name="type" id="type" defaultValue="Cash On Delivery" ref={register({required:'Type is required'})}>
  <option value="Cash On Delivery">Cash On Delivery</option>
  <option value="Paytm">Paytm</option>
  <option value="Gpay">Gpay</option>
  <option value="BHIM UPI">BHIM UPI</option>
</select>
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
 