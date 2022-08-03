import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';






const Footer = () => {
  return (
    <FooterContainer>
      <Left>
        <Logo>Freshi Barida</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aut
          saepe iure dignissimos commodi omnis nesciunt ut sapiente velit,
          accusantium numquam perspiciatis quisquam molestiae suscipit
          aspernatur architecto aliquid nulla eveniet.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Waumini House, box 564326 Westlands, Nairobi, Kenya
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +254 712 568734
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@freshibarida.ke
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </FooterContainer>
  );
}

export default Footer;


const FooterContainer = styled.div`
  background-color: #32cd32;
  display: flex;
  color: #fff;
  ${mobile({ flexDirection: "column" })}
`;


const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  padding:20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
margin:20px 0px

`;
const SocialContainer = styled.div`
display: flex;

`;
const SocialIcon = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
color:white;
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;


`;



const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;


const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: bold;
`;

const List = styled.ul`
margin: 0;
padding:0;
list-style: none;


`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`;
 
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;


`;

const Payment = styled.img`
width:50%;

`;



