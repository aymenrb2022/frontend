import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import {IoMdArrowRoundBack} from 'react-icons/io'
import smatwhatch from '../img/smatwhatch.png'
import Container from '../components/Container'
const Paiment = () => {
  return (
   <>
   <BreadCrumb title='Paiement'/>
   <Container class1='paiment py-2 '>
  

            <div className='row'>
                <div className='col-7'>
                 <div className='paiment-left-data '>
                 <h3 className='website-name'>Omeganet</h3>
                 <nav style={{"--bs-breadcrumb-divider": '>'}}
                  aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to='cart' className='text-dark total-price'>Panier</Link>
                        </li>
                    &nbsp;/
                    <li className="breadcrumb-item active total-price" aria-current="page">
                        Information
                        </li>
                        &nbsp;/
                    <li className="breadcrumb-item total-price">
                    Livraison
                        </li>
                    &nbsp;/
                    <li className="breadcrumb-item active total-price" aria-current="page">
                        Paiement
                        </li>
                </ol>
                </nav>
                    
                <h4 className='title total'>Informations de contact</h4>
                <p className='user-detail'>
                    omeganet (xxxxxx@gmail.com)
                </p>
                <h4 className='mb-3'> Adresse de livraison</h4>
                <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                    <div className='w-100'>
                        <select name='' className='form-control form-select' id=''>
                            <option value='' selected disabled>
                            Sélectionner un pays
                            </option>
                            <option>Tunis</option>
                            <option>Beja</option>
                            <option>nabeul</option>
                        </select>
                    </div>
                    <div className='flex-grow-1'>
                        <input type='text' placeholder='Prénom' className='form-control'/>
                    </div>
                    <div className='flex-grow-1'>
                    <input type='text' placeholder='Nom' className='form-control'/>
                    </div>
                    <div className='w-100'>
                    <input type='text' placeholder='Address' className='form-control'/>
                    </div>
                    <div className='w-100'>
                    <input type='text' placeholder='Complément adresse' className='form-control'/>
                    </div>
                    <div className='w-100'>
                    <input type='text' placeholder='Email' className='form-control'/>
                    </div>
                    <div className='flex-grow-1'>
                        <input type='number' maxLength='8' placeholder='Telephone'  className='form-control'/>
                        </div>
                    <div className='flex-grow-1'> 
                    <input type='text' placeholder='ville' className='form-control'/>
                        </div>
                    <div>
                        <input type='number' placeholder='Code Postal' className='form-control'/>
                        </div>
                       <div className='w-100'>
                        <div className='d-flex justify-content-between align-items-center'>
                         <Link to='/cart' className='text-dark'>
                            <IoMdArrowRoundBack className='me-2'/>
                            Retour au panier</Link>
                         <Link to='' className='button'>continuer</Link>
                        </div>
                        </div> 
                </form>
                 </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 align-items-center'> 
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative '>
                                <span 
                                className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1
                                </span>
                            <img src={smatwhatch} className='img-fluid' alt='product'/>
                        </div>
                        <div>
                        <h5 className='total'>Smartwatch</h5>
                            <p className='total-price'>gfjtyjyu</p>
                        </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5> 120 TND</h5>
                        </div>
                        </div>
                        
                        
                    </div>
                   <div className='border-bottom py-4'>
                   <div className='d-flex justify-content-between align-items-center'>
                        <p className='total'>Sous-total</p>
                        <p className='total-price'>120 TND</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0 total'>Livraison</p>
                        <p className='mb-0 total-price'>7 TND</p>
                    </div>
                   </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>127 TND</h5>
                    </div>
                </div>
            </div>
       
    </Container>
 
   </>
  )
}

export default Paiment