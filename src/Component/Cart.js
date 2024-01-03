import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';

const Cart = () => {
    const products=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const removeItem=(id)=>{
   //dispatch a action
   dispatch(remove(id))
    }
    
  const cards=products.map(product=>(
    <div className='col-md-3' style={{marginBottom:'20px'}}>
       <Card style={{ width: '18rem' }} key={product.id} className='h-100'>
        <div className='text-center'>
        <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
        </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR:{product.price}
        </Card.Text>
       
      </Card.Body>
      <Card.Footer style={{backgroundColor:'#fff'}}>
      <Button variant="danger" onClick={()=>removeItem(product.id)}>Remove Item</Button>
      </Card.Footer>
     
    </Card>
    </div>
  ))
  return (
    <div>
      <h1>Cart</h1>
     <div className='row'>{cards}</div>
    </div>
  )
}

export default Cart
