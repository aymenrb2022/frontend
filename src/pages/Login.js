import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Custominput from '../components/Custominput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginuser } from '../features/user/userSlice';

const loginSchema = yup.object().shape({ 
  email: yup.string().nullable().email('Le courriel devrait être valide').required('Remplir email'),
  password: yup.string().required('Remplir Mot de passe !!'),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      dispatch(loginuser(values));
    },
  });

  return (
    <>
      <BreadCrumb title='Connexion' />
      <div className='login-page py-5 home-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='login-card'>
              <h3 className='text-center mb-3'>Connexion</h3>
              <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <Custominput
                  type='email'
                  name='email'
                  placeholder='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className='error'>
                  {formik.touched.email && formik.errors.email}
                </div>
                <Custominput
                  type='password'
                  name='password'
                  placeholder='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className='error'>
                  {formik.touched.password && formik.errors.password}
                </div> 
                <div>
                  <Link to='/motpasse-oublie' className='text-dark motpasse-oublie'> Mot de passe oublié ?</Link>
                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0' type='submit'>Connexion</button>
                    <Link to='/sinscris' className='button sinscrire'>S'inscrire</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
