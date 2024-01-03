import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { getProducts } from '../Store/productSlice';
import statusCode from '../utils/statusCode';
const Product = () => {
const {data:products,status}=useSelector(state=>state.products)
  const dispatch=useDispatch();
  useEffect(()=>{

    //dispatch an action to fetch products
    dispatch(getProducts());
   

    // fetch('https://fakestoreapi.com/products')
    // .then(data=>data.json())
    // .then(result=>setProducts(result))
  },[])
  if(status==statusCode.LOADING){
     return <p>Loading...</p>
  }
  if(status==statusCode.ERROR){
    return <Alert key="danger" variant="danger">Something went wrong! Try Again Later</Alert>
 }
  const addToCart=(product)=>{
    //dispatch a action
    dispatch(add(product))
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
      <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  ))
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className='row'>
      {cards}</div>
    </div>
  )
}

export default Product
