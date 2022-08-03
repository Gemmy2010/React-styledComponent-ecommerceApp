import React from 'react'
import styled from 'styled-components';
import {mobile} from "../responsive";


const CategoryItem = ({item}) => {
  return (
    <CategoryItemContainer>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>


    </CategoryItemContainer>
  )
}

export default CategoryItem;

const CategoryItemContainer = styled.div`
 flex:1;
 margin:3px;
 height:70vh;
 position:relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  
  
`;
const Title = styled.h1`
color: #fff;
margin-bottom:20px;

`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  border-radius: 8px;
  cursor: pointer;
  font-weight:600;

  :hover {
    background-color: #32cd32;
    color: #fff;
  }
`;