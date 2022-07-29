import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <ProductsContainer>
        {popularProducts.map((item)=>( 
        <Product item={item} key={item.id} />

    ))}
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;

`;