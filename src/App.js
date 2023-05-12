import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotreMagasin from './pages/NotreMagasin';
import Blog from './pages/Blog';
import ComparerProduit from './pages/ComparerProduit';
import ListePrefere from './pages/ListePrefere';
import Login from './pages/Login';
import MotPasseoublie from './pages/MotPasseoublie';
import Sinscris from './pages/Sinscris';
import Resetpassword from './pages/Resetpassword';
import SingleProduct from './pages/SingleProduct';
import Flachvente from './pages/Flachvente';
import Cart from './pages/Cart';
import Paiment from './pages/Paiment';



function App() {



  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
             <Route index element={<Home />}/>
             <Route path='About' element={<About />}/>
             <Route path='Contact' element={<Contact />}/>
             <Route path='product' element={<NotreMagasin/>}/>
             <Route path='product/:id' element={<SingleProduct />} />
             <Route path='cart' element={<Cart/>}/>
             <Route path='paiment' element={<Paiment/>}/>
             <Route path='Blogs' element={<Blog/>}/>
             <Route path='Contacts' element={<Contact/>}/>
             <Route path='comparer-produit' element={<ComparerProduit/>}/>
             <Route path='liste-prefere' element={<ListePrefere/>}/>
             <Route path='login' element={<Login/>}/>
             <Route path='motpasse-oublie' element={<MotPasseoublie/>}/>
             <Route path='sinscris' element={<Sinscris/>}/>
             <Route path='réinitialiser le mot de passe' element={<Resetpassword/>}/>
             <Route path='product Name' element={<SingleProduct/>}/>
             <Route path='flachvente' element={<Flachvente/>}/>
            </Route>
          </Routes>      
       </BrowserRouter>
    </>
   
  );
}

export default App;
