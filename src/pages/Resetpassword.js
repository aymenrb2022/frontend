import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Custominput from '../components/Custominput'
const Resetpassword = () => {
  return (
    <>
    <BreadCrumb title='réinitialiser le mot de passe'/>
    <Container class1='login-page py-5 home-2'>
    <div className='row'>
         <div className='col-12'>
         <div className='login-card'>
             <h3 className='text-center mb-3'>Réinitialiser le mot de passe</h3>
             <form action='' className='d-flex flex-column gap-15'>
                <Custominput type='password' name='email'  placeholder='Mot de passe'/>
                <Custominput type='password' name='password' placeholder='Confirmez le mot de passe'/>
                 <div >
 
                     <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                     <button className='button border-0'> Ok</button>
                         
                     </div>
                 </div>
             </form>
         </div>
         </div>
     </div>
    
    
    </Container>
    </>
  )
}

export default Resetpassword