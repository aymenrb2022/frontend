import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (propos) => {
    const {title} =propos ;
  return (
    <div className='breadcrumb mb-0'>
    <div className='container-xxl'>
        <div className='col-12 '>
         <p className='text-center'>
            <Link to='/' className='text-dark' >
            Home 
            </Link>{''} / {title}
         </p>
        </div>
    </div>
    </div>
  )
}

export default BreadCrumb