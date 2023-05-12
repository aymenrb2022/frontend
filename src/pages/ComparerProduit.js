import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import close from '../img/close.png'
import smatwhatch from '../img/smatwhatch.png'
import Container from '../components/Container'
const ComparerProduit = () => {
  return (
    <>
    <BreadCrumb title='comparer-produit'/>
    <Container class1='comparer-produit py-4 home-2'>
        
            <div className='row'>
                <div className='col-3'>
                    <div className='comparer-produit-card position-relative'>
                        <img src={close} alt='' className='position-absolute img-fluid close '/>
                    <div className='comparer-image-card'>
                    <img src={smatwhatch} alt=''/>
                 </div>
                 <div className='comparer-detail-produit'>
                  <h5 className='title'>
                  La Hw 67 pro max est une montre intelligente de classe avec d’excellentes caractéristiques à un prix bas
                  </h5>
                  <h6 className='price mb-3'>149 DT </h6>
                  <div>
                    <div className='produit-detail'>
                        <h5>Marque:</h5>
                        <p>Smartwatch</p>
                        
                    </div>
                    <div className='produit-detail'>
                        <h5>Type:</h5>
                        <p>Smartwatch</p>
                    </div> 
                    <div className='produit-detail'>
                        <h5>Coleur:</h5>
                        <p>Smartwatch</p>
                    </div>
                    <div className='produit-detail'>
                        <h5>Disponibilité:</h5>
                        <p>Smartwatch</p>
                    </div>
                    <div className='produit-detail'>
                        <h5>Size:</h5>
                        <p>Smartwatch</p>
                    </div>
                  </div>
                 </div>
                    </div>
                 
                </div>
                <div className='col-3'>
                    <div className='comparer-produit-card position-relative'>
                        <img src={close} alt='' className='position-absolute img-fluid close '/>
                    <div className='comparer-image-card'>
                    <img src={smatwhatch} alt=''/>
                 </div>
                 <div className='comparer-detail-produit'>
                  <h5 className='title'>
                  La Hw 67 pro max est une montre intelligente de classe avec d’excellentes caractéristiques à un prix bas
                  </h5>
                  <h6 className='price mb-3'>149 DT </h6>
                  <div>
                    <div className='produit-detail'>
                        <h5>Marque:</h5>
                        <p>Smartwatch</p>
                        
                    </div>
                    <div className='produit-detail'>
                        <h5>Type:</h5>
                        <p>Smartwatch</p>
                    </div> 
                    <div className='produit-detail'>
                        <h5>Coleur:</h5>
                        <p>Smartwatch</p>
                    </div>
                    <div className='produit-detail'>
                        <h5>Disponibilité:</h5>
                        <p>Smartwatch</p>
                    </div>
                    <div className='produit-detail'>
                        <h5>Size:</h5>
                        <p>Smartwatch</p>
                    </div>
                  </div>
                 </div>
                    </div>
                 
                </div>
            </div>
        
    </Container>
    </>
  )
}

export default ComparerProduit