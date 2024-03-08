import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { Navigate } from 'react-router-dom';

function Privite({auth}) {
    const navigate = useNavigate();

  return auth? <ProductDetail/> : <Navigate to ="/login" />
}

export default Privite
