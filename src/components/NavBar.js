import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import {mobile} from '../responsive';




const NavBar = () => {
  return (
    <NavBarContainer>
      <Wrapper>
        <NavLeft>
          <Logo>Freshi Barida</Logo>
        </NavLeft>
        <NavCenter>
          <SearchOutlinedIcon />
          <input placeholder="Search" />

         
        </NavCenter>
        <NavRight>
          <Languages>EN</Languages>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </NavRight>
      </Wrapper>
    </NavBarContainer>
  );
}

export default NavBar;


const NavBarContainer = styled.div`
  height: 60px;
  background-color: #32cd32;
  color: #ffffff;
  ${mobile({height:"50px"})}

 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${mobile({ padding: "10px 0px" })}
`;


const NavLeft = styled.div`
flex:1;
align-items: center;
`;
const NavCenter = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  opacity: 1;
  border-radius: 6px;
  background-color: transparent;
  align-items: center;
  color: gray;
  border: 1px gray solid;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    padding: 10px 0px;
    outline: 0;
    color: #fff;
    ${mobile({ width: "50px" })}
  }
`;
const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2,justifyContent: "center" })}
`;

const Languages = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const Logo = styled.div`
  font-weight: bold;
  font-style: italic;
  ${mobile({ fontSize: "16px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

