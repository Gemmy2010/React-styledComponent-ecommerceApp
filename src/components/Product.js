import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

const Product = ({item}) => {
  return (
    <ProductContainer>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
         <SearchOutlinedIcon />
        </Icon>
        <Icon>
         <FavoriteOutlinedIcon />
        </Icon>
      </Info>
    </ProductContainer>
  );
}

export default Product;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:all 0.5s ease;
  cursor:pointer;
`;

const ProductContainer =styled.div`
flex:1;
margin:3px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;



&:hover ${Info}{
 opacity:1;
}


`;
const Circle =styled.div`
width: 200px;
height:200px;
border-radius:50%;
background-color:#fff;
position:absolute;


`;
const Image = styled.img`
  width: 90%;
  height: 75%;
  object-fit: cover;
  z-index: 2;
`;


const Icon = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #32cd32;
    transform:scale(1.1);
  }
`;