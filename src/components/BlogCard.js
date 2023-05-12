import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
    
        <div className='blog-card'>
            <div className='blog-image'>
                <img src='img/pub.jpg' className='img-fluid ' alt='blog'/>
            </div>
            <div className='blog-content'>
               <p className='date'>31 août 2023</p>
               <h5 className='tittre'>
               Beats by Dre
               </h5>
               <p className='desc'>Antoine Griezmann se concentre avec Beats by Dre</p>
               <Link to='/' className='button'>En savoir plus</Link>
            </div>
        </div>
        
        
   
    </>
  )
}

export default BlogCard