import React,{useEffect,useState} from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import {GrCompare} from  'react-icons/gr'
import {GrFavorite} from  'react-icons/gr'

import Container from '../components/Container'
import { Link ,useParams } from 'react-router-dom';

import axios from "axios"



const SingleProduct = () => {
  const uploadcart =()=> {
alert('cart')
  }

 const [prod, setProd] =useState([])
 const [image, setImage]=useState('')
 const [image1, setImage1]=useState('')
 const [image2, setImage2]=useState('')

  const {id} =useParams()
 useEffect(()=>{
     axios.get(`http://localhost:5000/api/product/${id}`)
    .then((res)=>{
    console.log(res.data.Prod)
    setProd(res.data.Prod)
    setImage(res.data.Prod.images[0].url)
    setImage1(res.data.Prod.images[1].url)
    setImage2(res.data.Prod.images[2].url)

    
    })
 },[id])

  const [grid ] = useState(4);
  const [orderredProduct,setorderredProduct]=useState(true);
  const props = {width: 600, height: 500, zoomWidth: 500 , 
    img: image}
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
   <>
   
  <BreadCrumb title='product Name'/>
  <Container class1='single-product py-5 home-2'>
  
    <div className='row'>
        <div className='col-6'>
          <div className='main-product-image '>
                        <img src={image}/>

            <div>
            </div>
          </div>
          <div className='other-image d-flex flex-wrap gap-15'>
            <div><img src={image1}
             alt='' className='img-fluid'/></div>
            <div><img src={image2}
             alt='' className='img-fluid'/></div>
           
          </div>
        </div>
        <div className='col-6'>
          <div className='main-product-detail'>
           <div className='border-bottom'>
             <h3>{prod.title}</h3>
           </div>
           <div className='border-bottom py-3'>
            <p className='price'>{prod.price}DT</p>
            <div className='d-flex align-items-center gap-10'>
              <ReactStars
            count={5}
            value={4}
            size={24}
            edit='false'
            activeColor="#ffd700"
    />
    <p className='mb-0'>(2 avis)</p>
              </div>
              <div>
          <a href='#review' className='text-dark  '>Ecrire une critique</a>
        </div>
            </div>
            <div className='border-bottom py-3'>
            <h3 className='product-heading'>Description:</h3>
            <div className='d-flex align-items-center gap-10  my-2'>
              
              <p className='product-data'>{prod.description} </p>
            </div>
            <div className='border-bottom py-3'></div>
            <div className='d-flex align-items-center gap-10  my-2'>
            </div>
            <div className='d-flex align-items-center gap-10  my-2'>
              <h3 className='product-heading'>Marque:</h3>
              <p className='product-data'>{prod.brand}</p>
            </div>
            <div className='d-flex align-items-center gap-10  my-2'>
              <h3 className='product-heading'>Mots clés:</h3>
              <p className='product-data'>{prod.slug}</p>
            </div>
            <div className='d-flex align-items-center gap-10 my-2'>
              <h3 className='product-heading'>Categorie:</h3>
              <p className='product-data'>{prod.category}</p>
            </div>
            <div className='d-flex align-items-center gap-10 my-2'>
              <h3 className='product-heading'>Couleur:</h3>
              <p className='product-data'>{prod.color}</p>
            </div>
            <div className='d-flex align-items-center gap-10 my-2'>
            <h3>Disponibilté :</h3><p className='en-stock'>En stock</p>
            </div>
          
           </div>
           <div className='border-bottom py-3'>
           <div className='d-flex align-items-center flex-row gap-10  '>
    
        <div>
            <input type='number' 
            name='' 
            min={1}
            max={10}
            style={{width:'70px'}}
            id='quantité'/>
           </div>        <h3 className='product-heading'> Quantité:</h3>
      
           <div className='d-flex align-items-center gap-10 ms-3 '>
           <button className='button border-0 text-white '
           type='submit'
           onClick={()=> {uploadcart}}
           > Ajouter au panier
           </button>
           <Link to='/' className='button border-0 text-white'type='submit'> Achetez maintenant
           </Link>
           </div>
           </div>
           </div>
           <div className='d-flex align-items-center gap-15'>
           <div>
              <a href='/'>
              <GrFavorite className='fs-5 me-2'/>Ajouter aux favoris</a>
            </div>
            <div className=''>
              <a href='/'>
              <GrCompare className='fs-5 me-2'/>Ajouter aux comparer </a>
            </div>
            
           </div>
           <div className='d-flex align-items-center gap-10  my-2'>
              <h3 className='product-heading'> Lien du produit:</h3>
              <a href='javascript:void(0)'
               onClick={()=>{
                copyToClipboard('https://s.yimg.com/uu/api/res/1.2/J853ItBI5uA7daJMmqq1mg--~B/Zmk9ZmlsbDtoPTYwMTt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-12/45544550-7c97-11ed-be7f-b301bffa0c0d.cf.jpg');
              }}>
                copier le lien du produit
              </a>
            </div>
          </div>
        </div>
    </div>
   
  </Container>
  
  <Container class1='reviews-wrapper py-5 home-2'>
    
      <div className='row'>
        <div className='col-12'>
        <h4 id='review' >Commentaires</h4>
          <div className='review-inner-wrapper'>
          <div className='review-head d-flex justify-content-between align-items-end'>
            <div>
              <h4 className='mb-2'>Avis des clients</h4>
              <div className='d-flex align-items-center gap-10'>
              <ReactStars
            count={5}
            value={4}
            size={24}
            edit='false'
            activeColor="#ffd700"
    />
    <p className='mb-0'>Basé sur 2 avis</p>
              </div>
            </div>
            {orderredProduct && (
          <div>
          <a href='' className='text-dark text-decoration-underline'>Ecrire une critique</a>
        </div>
        )}
          </div>
          <div  className='review-form py-4'>
          <h4 className='mb-2'>Ecrire une critique</h4>
          <form action='' className='d-flex flex-column gap-15'>
               <div>
               <ReactStars
            count={5}
            value={4}
            size={24}
            edit='true'
            activeColor="#ffd700"
    />
               </div>
               <div>
               <textarea name='' id='' className='w-100 form-control ' cols='30' rows='10' placeholder='Commantaire'></textarea>
              </div>
              <div className='d-flex justify-content-end'>
                <button className='button border-0'> Poster le commentaire</button>
              </div>
              </form>
          </div>
          <div className='reviews mt-4'>
            <div className='review '>
              <div className='d-flex gap-10 align-items-center'>
                <h6 className='mb-0'>navigation profonde</h6>
                <ReactStars
            count={5}
            value={4}
            size={24}
            edit='false'
            activeColor="#ffd700"
            />
              </div>
            
            <p className='mt-3'>Un service cellulaire pour votre montre Consultez votre fournisseur de services pour savoir comment activer le service sur votre montre.</p>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    
  </Container>
  <section className='populair py-5 home-2'> 
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'></h3>
        </div>
      </div>
      <div className='row'>
        

        
  
      </div>
    </div>
  </section>
  </>
  )
}

export default SingleProduct