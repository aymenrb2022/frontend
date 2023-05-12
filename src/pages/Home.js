import React from 'react'
import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'

import SpecialProduct from '../components/SpecialProduct'
import pc from '../img/pc.png'
import casque from '../img/casque.png'
import iphone from '../img/iphone.png'
import smart from '../img/smart.png'
import pc4 from '../img/pc4.png'
import famous from '../img/famous.png'
import famous2 from '../img/famous2.png'
import famous1 from '../img/famous1.png'
import famous3 from '../img/famous3.png'
import marque from '../img/marque.png'
import marque1 from '../img/marque1.png'
import marque2 from '../img/marque2.png'
import marque3 from '../img/marque3.png'
import marque4 from '../img/marque4.png'
import marque5 from '../img/marque5.png'
import marque6 from '../img/marque6.png'
import marque7 from '../img/marque7.png'
import marque8 from '../img/marque8.png'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
const Home = () => {

  const productState = useSelector((state=>state.product.product));
  console.log(productState)
  const dispatch= useDispatch()
  const getProducts = () => {
dispatch(getProducts);
  }
  return (
    <>
    <Container class1='home-1 py-5'>
        <div className='row'>
         <div className='col-6'>
          <div className='main-banner position-relative mb-0 '>
            <img 
            src={pc} 
             className='img-fluid rounded-3 ' 
             alt=''/>
            <div className='main-banner-content position-absolute'>
              <h4>PC portable Lenovo : </h4>
              <h5>IdeaPad Gaming 3 chute drastiquement chez Cdiscount</h5>
              <p>a partir de 2.500 TND</p>
              <Link className='button'>Acheter maintenant</Link>
            </div>
          </div>
         </div>
         <div className='col-6'>
          <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
         <div className='small-banner position-relative '>
            <img 
            src={casque} 
             className='img-fluid rounded-3 ' 
             alt=''/>
            <div className='small-banner-content position-absolute'>
              <h4>Casque : </h4>
              <h5> personnalisable sans fil 32Ω MELODY</h5>
              <p>a partir de 130 TND</p>
              
            </div>
          </div>
          <div className='small-banner position-relative '>
            <img 
            src={iphone}
             className='img-fluid rounded-3 ' 
             alt=''/>
            <div className='small-banner-content position-absolute'>
              <h4>Apple iPhone 13 Pro Max: </h4>
              <h5>128GB - Noir - Garantie 1 an</h5>
              <p>a partir de 6,681 TND</p>
              
            </div>
          </div>
          <div className='small-banner position-relative '>
            <img 
            src={smart} 
             className='img-fluid rounded-3 ' 
             alt=''/>
            <div className='small-banner-content position-absolute'>
              <h4>Smartwatch : </h4>
              <h5>AMontre Intelligente 25 Modes Sportifs Etanche IP68 pour Android iOS</h5>
              <p>a partir de 160 TND</p>
              
            </div>
          </div>
          <div className='small-banner position-relative '>
            <img 
            src={pc4} 
             className='img-fluid rounded-3 ' 
             alt=''/>
            <div className='small-banner-content position-absolute'>
              <h4>PC portable: </h4>
              <h5>Dell Concept Luna</h5>
              <p>a partir de 2.300 TND</p>
              
            </div>
            </div>
          </div>
          </div>
         </div>
        
    </Container>
  
<Container class1='home-3 ' >

      <div className='row'>
        <div className='col-12'>
        <h3 className='section-titre'>Categorie</h3>
          <div className='categorie d-flex justify-content-between flex-wrap align-items-center'>
          <div className='d-flex gap-10 align-items-center'>
            <div>
              <h6>Restez connecté</h6>
              <p>100 articles</p>
            </div>
            <img src='img/connecte.png' alt=''/>
          </div>
          <div className='d-flex gap-10 align-items-center'>
            <div>
              <h6>Gamer & Music</h6>
              <p>100 articles</p>
            </div>
            <img src='img/gaming.png' alt=''/>
          </div>
          <div className='d-flex gap-10 align-items-center'>
            <div>
              <h6>SmartTV</h6>
              <p>50 articles</p>
            </div>
            <img src='img/tv.png' alt=''/>
          </div>
          <div className='d-flex gap-10 align-items-center'>
            <div>
              <h6>Gros electromenage</h6>
              <p>60 articles</p>
            </div>
            <img src='img/electromenage2.png' alt=''/>
          </div>
         
          
          </div>
        </div>
      </div>
    
</Container>
   

    

    <section className='blog py-5 home-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-titre'></h3>
          </div>
          <div className='row'>
            
               
            
            
          </div>
       
      
        </div>
      </div>
    </section>
    
    <Container class1='famous-product  home-2'>
     
        <div className='row'>
        <div className='col-12'>
            <h3 className='section-titre'>Produit célèbre</h3>
          </div>
          <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative '>
              <img src={famous} className='img-fluid' alt='famouss' />
              <div className='famous-content position-absolute'>
              <h5 >iPhone 14 Pro </h5>
              <h4 >Une expérience unique et magique sur iPhone</h4>
              <p>A partir de 6.780 TND</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative '>
              <img src={famous2} className='img-fluid' alt='famouss' />
              <div className='famous-content position-absolute'>
              <h5  className='text-dark' >PC Portable gamer MSI <br/>
               </h5>
              <h6 className='text-dark' >avec i7 et RTX 3070 à petit prix</h6>
              <p className='text-dark'> A partir de 4.300 TND</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative '>
              <img src={famous3} className='img-fluid' alt='famouss' />
              <div className='famous-content color position-absolute'>
              <h5 className='text-dark' >JBL Wave 200TWS  <br/>
               </h5>
              <h6 className='text-dark' >écouteur Bluetooth</h6>
              <p className='text-dark'>A partir de 329.00 TND</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative '>
              <img src={famous1} className='img-fluid' alt='famouss' />
              <div className='famous-content color position-absolute'>
              <h5  className='text-dark'>E watchOS 8<br/>
               </h5>
              <h6 className='text-dark' >Une expérience unique et magique sur iPhone</h6>
              <p className='text-dark'>A partir de 2.900 TND</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>
      
      

    </Container>
  
  
   
    <Container class1='blog  home-2'>
     
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-titre'></h3>
          </div>
        <div className='row'>
          <div className='col-3'>
       
          </div>
          <div className='col-3'>
           
          </div>
          <div className='col-3'>
           
          </div>
          <div className='col-3'>
          
          </div>
        </div>
        </div>
     
    </Container>

    <Container class1='home-3 py-5'>
     
       <div className='row'>
        <div className='col-12'>
         <div className='marquee-inner-wrapper marquet'>
        <Marquee className='d-flex '>
          <div className='mx-4 ww-30'>
            <img src={marque} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque1} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque2} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque3} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque4} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque5} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque6} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque7} alt='Marque'/>
          </div>
          <div className='mx-4 ww-30'>
            <img  src={marque8} alt='Marque'/>
          </div>
        </Marquee>
         </div>
        </div>
       </div>
      
    </Container>
    
    </>
  )
}

export default Home