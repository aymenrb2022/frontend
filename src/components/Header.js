import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import heart2 from '../img/heart2.gif'
import compare from '../img/compare.png'
import user from '../img/user.gif'
import shop  from '../img/shop.png'
import category  from '../img/category.png'
const Header = () => {
  return (
    <>

    <header className="header-upper py-2"> 
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-2'>
              <h2>
                <Link className='text-white p-2'>Omega-Net</Link>
              </h2>
            </div>
            <div className='col-5'>
            <div className="input-group mb-3">
              <input type="text" 
              class="form-control"
              placeholder="Recherche icii .." 
              aria-label="Recherche icii ..." 
              aria-describedby="basic-addon2"/>
              <span className="input-group-text p-3" id="basic-addon2">
              <BsSearch/>
              </span>
            </div>
            </div>
            <div className='col-5'>
            <div className='header-upper-Links d-flex align-items-center justify-content-between'>
                <div>
                  <Link 
                  to ='/comparer-produit'                
                  className='d-flex align-items-centre gap-10'>
                  <img className='img' src={compare} alt='compare'/>
                  <p className='mb-0 text-white my-2'>
                  comparer <br/> 
                  </p>
                  </Link>
                </div>
                <div>
                <Link 
                to ='/liste-prefere'
                className='d-flex align-items-centre gap-10'>
                <img className='img' src={heart2} alt='préférée'/>
                  <p className='mb-0 text-white my-2'>
                  Mais Favoris
                  </p>
                </Link>
                </div>
                <div>
                <Link 
                to ='/login'
                className='d-flex align-items-centre gap-10'>
                <img className='img' src={user} alt='compte'/>
                  <p className='mb-0 text-white my-2'>
                  Se  Connecte
                  </p>
                </Link>
                </div>
                <div>
                <Link 
                to='/cart' 
                className='d-flex align-items-centre gap-10' >
                <img className='img' src={shop} alt='shop'/>
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0 text-white'>500 TND</p>
                  </div>
                </Link>
                </div>
                </div>
        </div>
        </div>
      </div> 
        
    </header>
    <header className='header-botton py-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-15'>
              <div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-centre" 
                type="button" 
                id="dropdownMenuButton1"
                 data-bs-toggle="dropdown" 
                 aria-expanded="false">
                 <img className='img' src={category} alt=''/>
                 <span > Categories</span>
                </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                
                <li><Link className='dropdown-item' href="#">Action </Link></li>
                <li><Link className='dropdown-item' href="#">Another action </Link></li>
                <li><Link className='dropdown-item' href="#">Something else here </Link></li>
                <li><Link className='dropdown-item' href="#">Something else here </Link></li>
                <li><Link className='dropdown-item' href="#">Something else here </Link></li>
                <li><Link className='dropdown-item' href="#">Something else here </Link></li>
              </ul>
          </div>
              </div>
              <div className='menu-Links'>
                <div className='d-flex align-items-center gap-30 '>
                  <NavLink className='liste' to='/'>Home</NavLink>
                  <NavLink className='liste' to='/product'> Magasin</NavLink>
                  <NavLink className='liste' to='/flachvente'>Flachvente</NavLink>
                  <NavLink className='liste' to='/Contacts'>Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header