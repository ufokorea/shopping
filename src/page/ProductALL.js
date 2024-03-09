import React from 'react'
import ItemCard from '../component/ItemCard'
import { useSearchQuery } from '../hooks/useSearchQuery'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductALL = () => {

    const [query,setQuery] = useSearchParams();
    let searchQuery=query.get('q');
    
    useEffect(()=>{

    },[query])

    const {isLoading, data, isError, error} = useSearchQuery(searchQuery);
    
    if (isLoading) {
        return <div>Loading...</div>; // 로딩 중임을 표시하는 UI
    }
    
    if (isError) {
        return console(error.message); 
    }


  return (
    <div>
        <Container>
            <Row>
                {data?.map((item) => <Col lg={3}><ItemCard item={item}/></Col>)}
            </Row>
        </Container>        
    </div> 

  )
}

export default ProductALL