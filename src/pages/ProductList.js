import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <ProductListContainer>
      <NavBar />
      <Announcement />
      <Title>Fruits</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Fruits
            </Option>
            <Option>Oranges</Option>
            <Option>Avocados</Option>
            <Option>Mangoes</Option>
            <Option>PawPaw</Option>
            <Option>Apples</Option>
            <Option>Kiwi</Option>
            <Option>Bananas</Option>
            <Option>Pineapple</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Vegetables
            </Option>
            <Option>Cabbages</Option>
            <Option>Tomatoes</Option>
            <Option>Cucumber</Option>
            <Option>Cauliflower</Option>
            <Option>Onions</Option>
            <Option>Spinach</Option>
            <Option>Carrots</Option>
            <Option>Bell pepper</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </ProductListContainer>
  );
}

export default ProductList;


const ProductListContainer = styled.div``;


const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;


`;
const Filter = styled.div`
margin: 20px;

`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;

`;

const Select =styled.select`
padding:10px;
margin-right: 20px;

`;
const Option = styled.option``;
