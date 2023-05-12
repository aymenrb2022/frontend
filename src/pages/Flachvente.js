import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/product/productSlice'
const Flachvente = () => {
  const productState = useSelector((state=>state.product.product));

  const dispatch= useDispatch()
  useEffect(()=> {
    getProducts();
  },[])
  const getProducts = ()=> {
 dispatch(getAllProducts());
  };
  return (
    <>
    <BreadCrumb title='Flach vente'/>
    <Container class1='special-prod py-5 home-2'>
     
        <div className='row'>
        <div className='col-12'>
            <h3 className='section-titre'>Flach vente</h3>
          </div>
        </div>
        <div className='row '>
          {
            productState && 
            productState?.map((item,index)=> {
              return <SpecialProduct key={index} 
              brand={item?.brand}
              title={item?.title} />
            })
          }
        
        
        </div>
      
    </Container>
    </>
  )
}

export default Flachvente