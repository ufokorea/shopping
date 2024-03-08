import React from 'react'
import ItemCard from '../component/ItemCard'
import { useProductQuery } from '../hooks/useProductQuery'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductALL = () => {

    const {isLoading, data, isError, error} = useProductQuery();
    
    if (isLoading) {
        return <div>Loading...</div>; // 로딩 중임을 표시하는 UI
    }
    
    if (isError) {
        return <div>Error: {error.message}</div>; // 에러 메시지를 표시하는 UI
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