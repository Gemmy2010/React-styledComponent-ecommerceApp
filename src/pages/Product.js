import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';




const Product = () => {
  return (
    <ProductContainer>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://kcalkitchen.co.uk/wp-content/uploads/2020/03/1874.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Pineapple</Title>

          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            vero quae quasi natus, nemo nihil ipsam iusto modi delectus
            consectetur praesentium quibusdam labore fugiat unde nobis
            dignissimos maiores odit! Blanditiis.
          </Description>
          <Price>$ 5</Price>
          <Category></Category>
          <AddContainer>
            <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          {/* <CountInStock></CountInStock>
            <Timestamp></Timestamp> */}
        </InfoContainer>
      </Wrapper>
      <Footer />
    </ProductContainer>
  );
}

export default Product;


const ProductContainer = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display:flex;


`;

const ImageContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;

`;
const Title = styled.h1`
font-weight: 200;

`;
const Price = styled.span`
font-weight: 200;
font-size:40px;
`;
const Category = styled.div``;
const Description = styled.div`
margin: 20px 0px;
`;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items: center;
justify-content: space-between;

`;
const AmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;


`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #32cd32;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  cursor:pointer;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid #32cd32;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #32cd32;
  }
`;
