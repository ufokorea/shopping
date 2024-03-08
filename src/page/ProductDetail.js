import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../hooks/useProductQuery'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({auth}) => {

  const navigate = useNavigate();

  let {id}=useParams();

  const {isLoading, data, isError, error} = useProductQuery(id);
    
  if (isLoading) {
      return <div>Loading...</div>; // 로딩 중임을 표시하는 UI
  }
  if (isError) {
    return console.log(error.message); // 에러 메시지를 표시하는 UI
  }

  if(auth==false) {
    return navigate(`/login`);
  }

  return (
    <Container>
        <Row>
            <Col lg={6}>
            <img src={data?.img} />
            </Col> 
            <Col lg={6}>
                <div>{data?.title}</div>
                <div>{data?.price}</div>                
            </Col>
        </Row>
      
    </Container>

  )
}

export default ProductDetail
