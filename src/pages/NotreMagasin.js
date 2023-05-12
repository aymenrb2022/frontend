import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component"
import ProductCard from '../components/ProductCard'
import grid1 from '../img/grid1.png'
import grid2 from '../img/grid2.png'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/product/productSlice'


const NotreMagasin = () => {
  const [grid , setGrid] = useState(4);
  const productState = useSelector((state) => state.product.product);

  const dispatch = useDispatch();
  useEffect(()=> {
    getProducts();
  },[])
  const getProducts = ()=> {
 dispatch(getAllProducts());
  };

 
  return (
    <>
    <BreadCrumb title='NotreMagasin'/>
    <Container class1= 'magasin home-2 py-5'>
      
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'> Acheter par catégorie</h3>
              <div>
              <ul className='ul1'>
              <li>Watch</li>
              <li>TV</li>
              <li>Camera</li>
              <li>Smarphone</li>
              <li>Informatique</li>
            </ul>
            </div>
                    </div>
                    <div className='filter-card mb-3'>
                      <h3 className='filter-title'> Filtrer par</h3>
                      <div>
                      <h5 className='sub-title'>Disponibilité</h5>
                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value=''checked/>
                        <label className='form-check-label' htmlfor=''>
                        En stock
                        </label>
                      </div>

                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='' />
                        <label className='form-check-label' htmlfor=''>
                        Rupture de stock
                        </label>
                      </div>
                      </div>
                      <h5 className='sub-title'>Prix</h5>
                      <div className='d-flex align-items-center gap-10 '>
                      <div class="form-floating ">
                      <input type="email" class="form-control" id="floatingInput" placeholder="Minimum"/>
                      <label for="floatingInput">Minimum</label>
                      </div>
                      <div class="form-floating ">
                      <input type="email" class="form-control" id="floatingInput" placeholder="Maximum"/>
                      <label for="floatingInput">Maximum</label>
                      </div>
                      </div>
                      <h5 className='sub-title'>Coleur</h5>
                      <div  >
                        <div>
                        <ul className='color ps-0'>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                        </div>
                      </div>
                      <div>
                      <h5 className='sub-title'>Taille</h5>
                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='color-1'/>
                        <label className='form-check-label' htmlfor='color-1'>
                        S(1)
                        </label>
                      </div>

                      <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id='color-2' />
                        <label className='form-check-label' htmlfor='color-2'>
                          M(2) 
                        </label>
                      </div>
                      </div>
                      
                    </div>
                    <div className='filter-card mb-3'>
                      <h3 className='filter-title'> Etiquettes de produit</h3>
                      <div>
                      <div className='product-tags d-flex flex-wrap align-items-center '>
                       <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                        Smartphone
                       </span>
                       <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                        Oppo
                       </span>
                       <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                        Haut-parleur
                       </span>
                       <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                        Vivo
                       </span>
                      </div>
                    </div>
                    </div>
                    <div className='filter-card mb-3'>
                      <h3 className='filter-title'> Produit aléatoire</h3>
                      <div>
                        <div  className='random-product mb-3 d-flex'>
                          <div className='w-50'>
                            <img src='img/bafel.png' alt='watch' className='img-fluid'/>
                          </div>
                          <div className='w-50'>
                            <h5 >Mini Haut-parleur 8" mobile avec Bluetooth et micro sans fil</h5>
                            <ReactStars
                              count={5}
                              value={4}
                              size={24}
                              edit='false'
                              activeColor="#ffd700"
                              />
                              <p>297.00 TND</p>
                          </div>
                          
                        </div>
                        <div  className='random-product d-flex'>
                          <div className='w-50'>
                            <img src='img/bafel2.png' alt='watch' className='img-fluid'/>
                          </div>
                          <div className='w-50'>
                            <h5 >Mini Haut Parleur Bluetooth Rouge</h5>
                            <ReactStars
                              count={5}
                              value={4}
                              size={24}
                              edit='false'
                              activeColor="#ffd700"
                              />
                              <p>19,000 TND</p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                
                </div>
                <div className='col-9'>
                  <div className='sort-by mb-4'>
                   <div className='d-flex justify-content-between align-items-center'>
                   <div className='d-flex align-items-center gap-10'>
                      <p className='mb-0 d-block' style={{'width':'100px'}}>Trier par:</p>
                      <select className='form-control from-select' id=''>
                        <option value='manual'>Relevance</option>
               <option value='best-selling' selected='selected'> Prix, bas à haut     </option>
                        <option value=''> Nouveaux produits d'abord </option>
                        <option value=''>Nom , A a Z</option>
                        <option value=''>Nom , Z a A</option>
                        <option value=''>Prix, Haut à bas</option>
                        <option value=''>aléatoire</option>
                        <option value=''>En stock</option>
                      </select>
                    </div>
                    <div className='d-flex  align-items-center gap-10'>
                      <div className='d-flex align-items-center gap-10'>
                        <img 
                        onClick={() => {
                         setGrid(4);
                        } }
                         src= {grid1} alt='grid' 
                         className='d-block img-fuid img-gild'/>
                        <img 
                        onClick={() => {
                          setGrid(12);
                         } }
                        src= {grid2} alt='grid' 
                        className='d-block img-fuid img-gild'/>
                        </div>
                    </div>
                   </div>
                  </div>
                  <div className='product-list '>
                    <div className='d-flex gap-10 flex-wrap '>
                    <ProductCard data={productState} grid={grid}/>
                    </div>
                    
                  </div>
                </div>
              </div>
             
          </Container>
          
          </>
    )
}

export default NotreMagasin