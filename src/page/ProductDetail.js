import React from 'react'
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '../hooks/useProductQuery'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({auth}) => {

  let {id}=useParams();
  const {isLoading, data, isError, error} = useProductQuery(id);
    
  if (isLoading) { return <div>Loading...</div>; }
  if (isError) { return console.log(error.message); }

  return (
    <Container>
        <Row>
            <Col lg={6}>
            <img src={data?.img} />
            </Col> 
            <Col lg={6}>
                <div><h3>{data?.title}</h3></div>
                <div>{data?.price}</div>   

                <DropdownButton id="dropdown-basic-button" title="사이즈">
                  {data?.size.map((item) => <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>)}
                </DropdownButton>

            </Col>
        </Row>
      
    </Container>

  )
}

export default ProductDetail
