import React from 'react'
import { Link } from 'react-router-dom'
import {services} from '../utils/Data'
import insta from '../img/insta.png'
import email from '../img/email.png'
import facebook from '../img/facebook.png'
import linkedin from '../img/linkedin.png'

const Footer = () => {
  return (
    <>
        <footer className='py-4 icon'>
    <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <div className='social-icons d-flex justify-content-center gap-10'>
          <a href=''><img className='img-icons' src={facebook} alt='social icons'/></a>
            <a href=''><img className='img-icons ' src={insta} alt='social icons'/></a>
            <a href=''><img className='img-icons' src={email} alt='social icons'/></a>
            <a href=''><img className='img-icons' src={linkedin} alt='social icons'/></a>
            </div>
          </div>
        </div>
    </div>
    </footer>
    <footer className=' py-2 '>
      <div className='container-xxl'>
       <div className='row'>
        <div className='col-12'>
          <div className='servies d-flex align-items-center justify-content-between'>
            {
              services?.map((i,j) => {

                return ( <div className='d-flex align-items-center gap-15' key={j}>
                <img className='img' src={i.image} alt='services'/>
                <div>
                  <h6 >{i.title}</h6>
                  <p className='mb-0 service-color'>{i.tagline}</p>
                </div>
               </div>)
              })
            };
          </div>
        </div>
       </div>
      </div>
      
    </footer>

    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4 text-white'>
            <h4>Contactez-nous</h4>
            <div className='footer-links d-flex flex-column'>
            <address className='text-white'>
             117 rue habib bourgiba,<br/> sidi Hssine ,Tunis<br/>
             Codepostal:1095
            </address>
            <a href='tel=+21628587210'
            className='mt-4 d-block mb-2 text-white'
            >
            +21628587210 </a>
            <a href='mailto:omega-net@contact.com'
            className='mt-4 d-block mb-2 text-white'
            >
            omega-net@contact.com </a>
            </div>
          </div>
          <div className='col-3 text-white'>
            <h4>Information</h4>
            <div className='footer-links d-flex flex-column'> 
              <Link className='text-white py-2 mb-1'>Politique de confidentialité</Link>
              <Link className='text-white py-2 mb-1'>Politique de remboursement</Link>
              <Link className='text-white py-2 mb-1'>politique d'expédition</Link>
              <Link className='text-white py-2 mb-1'>conditions d'utilisation</Link>
              <Link className='text-white py-2 mb-1'>blogs</Link>
            </div>
          </div>
          <div className='col-3 text-white'>
            <h4>Compte</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Recherche</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
              <Link className='text-white py-2 mb-1'>tableau des tailles</Link>
              <Link className='text-white py-2 mb-1'>smartwhatch</Link>
            </div>
          </div>
          <div className='col-2 text-white'>
            <h4>Lien rapide</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Téléphone</Link>
              <Link className='text-white py-2 mb-1'>Ordinateurs portable</Link>
              <Link className='text-white py-2 mb-1'>Tablette</Link>
              <Link className='text-white py-2 mb-1'>Smartwhatch</Link>
              <Link className='text-white py-2 mb-1'>Accessiores</Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl copyright'>
        <div className='row'>
          <div className='col-12'>
           <p className='text-center mb-0 text-dark'>&copy; { new Date().getFullYear()}: Omega-Net™</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer