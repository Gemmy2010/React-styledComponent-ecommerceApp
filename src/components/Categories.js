import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import {mobile} from "../responsive";

const Categories = () => {
  return (
    <CategoriesContainer>
        {categories.map(item =>(
              <CategoryItem item={item} key={item.id}/>
        ))}
        
          
        
    </CategoriesContainer>
  )
};

export default Categories;


const CategoriesContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px",flexDirection:"column" })}
`;