import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Cart = () => {
  return (
    <CartContainer>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <Toptexts>
            <Toptext>Shopping Bag(2)</Toptext>
            <Toptext>Your Wishlist(0)</Toptext>
          </Toptexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=612x612&w=0&h=LLY2os0YTG2uAzpBKpQZOAC4DGiXBt1jJrltErTJTKI=" />
                <Details>
                  <ProductName>Oranges</ProductName>
                  <ProductId>8976544568</ProductId>
                  
                </Details>
              </ProductDetail>
              <PriceDetails>
                price
              </PriceDetails>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </CartContainer>
  );
}

export default Cart;


const CartContainer = styled.div``;
const Wrapper = styled.div`
padding: 20px;

`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-content: center;
justify-content: space-between;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black"  : "transparent"};
color: ${(props) => props.type === "filled" && "white"}


`;

const Toptexts = styled.div``;
const Toptext = styled.span`
text-decoration:underline;
cursor: pointer;
margin:0px 30px;

`;



const Bottom = styled.button`
display: flex;
justify-content:space-between;

`;

const Info = styled.button`
flex:3;


`;
const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductId = styled.span``;
const ProductName = styled.span``;
const Image = styled.img``;
const ProductDetail = styled.div`
flex:2;
`;
const PriceDetails = styled.div`
flex:1;
`;
const Details = styled.div``;


const Summary = styled.button`
flex:1;

`;