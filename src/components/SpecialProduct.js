import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import special from '../img/special.png'
const SpecialProduct = (props) => {
    const {title}=props
    const {brand}=props
  return (
    <div className='col-6 mb-3'>
        <div className='special-product'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src={special} className='img-fluid' alt='samsung a30' />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>{brand}</h5>
                    <h6 className='tiitre'>{title}</h6>
                    <ReactStars
                    count={5}
                    value='3'
                    size={24}
                    edit='false'
                    activeColor="#ffd700"
                    />
                    <p className='price'>
                    <span className='red-p'>3.500 TND </span> &nbsp;<strike>3.834 TND</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center'>
                        <p className='mb-0'>
                            <b> 5 </b>jours
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-2 bg-danger '> 1</span>:
                            <span className='badge rounded-circle p-2 bg-danger'> 1</span>:
                            <span className='badge rounded-circle p-2 bg-danger'> 1</span>
                        </div>
                        </div>
                        <div className='prod-count py-3'>
                        <p>Produit :</p>
                        <div className='progress'
                            role="progressbar" 
                            aria-label="Basic example" 
                            aria-valuenow="25" aria-valuemin="0"
                             aria-valuemax="100">
                        <div className='progress-bar' style={{width: '25%'}}></div>
                        </div>
                        </div>
                        <Link className='button'>aad to cart</Link>
                            
                           
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct