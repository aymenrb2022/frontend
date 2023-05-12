import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
const Blog = () => {
  return (
    <>
    <BreadCrumb title='Blogs'/>
    <div className='blog-page py-5 home-2'>
        <div className='container-xxl'>
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
                </div>
                <div className='col-9'>
                  <div className='row'>
                <div className='col-6'>
                    <BlogCard/>
                </div>
                <div className='col-6'>
                    <BlogCard/>
                </div><div className='col-6'>
                    <BlogCard/>
                </div><div className='col-6'>
                    <BlogCard/>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
          
    </>
  )
}

export default Blog