import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Custominput from '../components/Custominput'
const MotPasseoublie = () => {
  return (
    <>
   <BreadCrumb title='Mot de passe oublié'/>
   < Container  class1='login-page py-5 home-2'>
    <div className='row'>
        <div className='col-12'>
        <div className='login-card'>
            <h3 className='text-center mb-3'>Réinitialisez votre mot de passe</h3>
            <p className='text-center'>Nous vous enverrons un e-mail pour réinitialiser votre mot de passe</p>
            <form action='' className='d-flex flex-column gap-15'>
                <Custominput type='email' name='email'  placeholder='Email'/>
                <div>
                    <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                    <button className='button border-0' type='submit'> 
                     Envoyer
                     </button>
                       <Link to='/login'>Annuler</Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
   </ Container >
   </>
  )
}

export default MotPasseoublie