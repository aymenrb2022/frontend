import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import Container from '../components/Container'
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { createrequets } from '../features/contact/contactSlice'

let schema = yup.object().shape({
  nom: yup.string().required(" ecrire votre nom !! "),
  email: yup.string().email("Email should be valid").required("ecrire Email!! "),
  mobile: yup.number().required("ecrire mobile !! "),
  comment: yup.string().required(" ecrire un commentaire !! "),
});
const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nom:"",
      email: "",
     mobile: "",
     comment:"",
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(createrequets(values));
    },
  });
  return (
    <>
     <BreadCrumb title='Contacts'/>
     <Container class1='contact-p1 home-2'>
      
        <div className='row'>
          <div className='col-12'>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51155.810875554176!2d10.176483903186936!3d36.74085364500404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd31b539f0cc4f%3A0xfaab145fbc490cdc!2z2YXYudiq2YXYr9mK2Kkg2LPZitiv2Yog2K3Ys9mK2YY!5e0!3m2!1sar!2stn!4v1679441712615!5m2!1sar!2stn" 
          width="600" 
          height="450" 
          className ='border-0 w-100' 
          allowFullScreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className='col-12 py-4'>
            <div className='contact-p2  d-flex justify-content-between'>
              <div >
                <h3 className='contact-title mb-4'>Contactez-nous</h3>
                <form action='' className='d-flex flex-column gap-15'onSubmit={formik.handleSubmit}>
               <div>
                <input type={Text} 
                className='form-control'
                 placeholder='Nom' 
                 name='nom'
                 onChange={formik.handleChange("nom")}
                 onBlur={formik.handleBlur("nom")}
                 value={formik.values.nom}
                 />
                 <div className="error mt-2">
               {formik.touched.nom && formik.errors.nom}
              </div>
               </div>
               <div>
                <input type={'email'}
                 className='form-control'
                  placeholder='Email*' 
                  name='email'
                 onChange={formik.handleChange("email")}
                 onBlur={formik.handleBlur("email")}
                 value={formik.values.email}
                  />
                  <div className="error mt-2">
               {formik.touched.email && formik.errors.email}
              </div>
               </div>
               <div>
                <input type={Text} 
                className='form-control' 
                placeholder='Numéro de portable' 
                name='email'
                 onChange={formik.handleChange("mobile")}
                 onBlur={formik.handleBlur("mobile")}
                 value={formik.values.mobile}
                />
                  <div className="error mt-2">
               {formik.touched.mobile && formik.errors.mobile}
              </div>
               </div>
               <div>
               <textarea name='comment' id='' 
               className='w-100 form-control '
                cols='30' rows='10' 
                placeholder='Commantaire'
                
                 onChange={formik.handleChange("comment")}
                 onBlur={formik.handleBlur("comment")}
                 value={formik.values.comment}
                ></textarea>
              </div>
              <div className="error mt-2">
               {formik.touched.comment && formik.errors.comment}
              </div>
              <div>
                <button className='button border-0' type='submit'> Envoyer</button>
              </div>
              </form>
              </div>
              <div >
                <h3 className='contact-title mb-4'>Prenez contact avec nous</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                   <AiFillHome className='mb-3'/>
                   <address> 117 rue habib bourgiba,
                    sidi Hssine ,Tunis</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BsFillTelephoneFill className='mb-3'/>
                    <p>+21628587210</p>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <MdEmail className='mb-3'/>
                    <p >rebai4303gmail.com</p>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsFillInfoSquareFill className='mb-3'/>
                      <p>Ouvert tous les jours de 8h à 19h</p>
                    </li>
                  </ul>
                </div>
                </div>
               
            </div>
          </div>
        </div>
     
     </Container>
    </>
  )
}

export default Contact