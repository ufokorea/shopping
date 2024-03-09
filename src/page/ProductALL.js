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
    
    if (isLoading) { return <div>Loading...</div>; }
    if (isError) { return console.log(error.message); }

    if( data.length == 0) {
        return <div><h5>자료가 없습니다.</h5></div>
    }; 

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