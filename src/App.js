import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductALL from './page/ProductALL';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import NavBar from './page/NavBar';
import { useEffect, useState } from 'react';
import Privite from './page/Privite';


function App() {
  const [auth,setAuth]=useState(false);

  useEffect(()=>{

  },[auth])
  
  return (
    <div >
      <NavBar auth={auth}  setAuth={setAuth}/>
    <Routes>
      <Route path="/" element={<ProductALL />} />
      <Route path="/login" element={<Login setAuth={setAuth}/>} />
      <Route path="product/:id" element={<Privite auth={auth}/>} />  
      {/* <Route path="product/:id" element={<ProductDetail auth={auth}/>} />       */}
    </Routes>
    </div>
  );
}

export default App;
