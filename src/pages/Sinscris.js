import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Custominput from '../components/Custominput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerusers } from '../features/user/userSlice';

const signUpSchema = yup.object().shape({
    prenom:yup.string().required('prenom et requis'),
    nom:yup.string().required('nom et requis'),
    email: yup.string().nullable().email('Le courriel devrait être valide').required('Email est requis'),
    mobile:yup.string().required('telephone est requis'),
    password: yup.string().required('Mot de passe est requis'),
  });
const Sinscris = () => {
 
    const dispatch=useDispatch();
    const formik = useFormik({
        initialValues: {
          prenom : '',
          nom: '',
          email: '',
          mobile:'',
          password:''
        },
        validationSchema:signUpSchema,
        onSubmit: values => {
          dispatch(registerusers(values));
        },
      });
  return (
    <>
   <BreadCrumb title='Créer un compte'/>
   <Container class1='login-page py-5 home-2'>
    <div className='row'>
        <div className='col-12'>
        <div className='login-card'>
            <h3 className='text-center mb-3'>Créer un compte</h3>
            <form 
            action='' 
            className='d-flex flex-column gap-15'
             onSubmit={formik.handleSubmit}>
                <Custominput type='text' name='prenom' placeholder='Prénom' 
                val={formik.values.prenom}
                onChange={formik.handleChange('prenom')}
                onBlur={formik.handleBlur('prenom')}
                />
                <div className='error'>
                    {formik.touched.prenom && formik.errors.prenom}
                </div>
                <Custominput type='text' name='nom' placeholder='nom' 
                value={formik.values.nom}
                onChange={formik.handleChange('nom')}
                onBlur={formik.handleBlur('nom')}
                />
                <div className='error'>
                    {formik.touched.nom && formik.errors.nom}
                </div>
                <Custominput type='email' name='email' placeholder='email' 
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                />
                <div className='error'>
                    {formik.touched.email && formik.errors.email}
                </div>
                <Custominput type='number' name='mobile' placeholder='mobile' 
                value={formik.values.mobile}
                onChange={formik.handleChange('mobile')}
                onBlur={formik.handleBlur('mobile')}
                />
                <div className='error'>
                    {formik.touched.mobile && formik.errors.mobile}
                </div>
                <Custominput type='password' name='password' placeholder='password' 
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                />
                <div className='error'>
                    {formik.touched.password && formik.errors.password}
                </div>
                
                <div >
                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'type='submit'> Créer </button>
                        
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
   </Container>
   </>
  )
}

export default Sinscris

