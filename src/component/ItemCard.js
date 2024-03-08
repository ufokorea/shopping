import React from 'react'
import { useNavigate } from 'react-router-dom';

const ItemCard = ({item}) => {

  const navigate = useNavigate();
  const showDetail =() => {

      navigate(`/product/${item.id}`);
  }


  return (
    
    <div onClick={showDetail}>
      <img width={300} src={item.img}/>

      <div>
        {item.choice?"Conscious choice":""}

        <h3>{item.title}</h3>
        <p>₩{item.price}원</p>
        <p>{item.new?"신상품":""}</p>
      </div>

    </div>
  )
}

export default ItemCard
