import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {mobile} from '../responsive'



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
                  <ProductName>
                    <b>Product:</b>Oranges
                  </ProductName>
                  <ProductId>
                    <b>ID</b>8976544568
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Apples
                  </ProductName>
                  <ProductId>
                    <b>ID</b>6543276876
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 10</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECK OUT</Button>
          </Summary>
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
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-content: center;
justify-content: space-between;
padding:30px 0px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black"  : "transparent"};
color: ${(props) => props.type === "filled" && "white"}
`;

const Toptexts = styled.div`
  ${mobile({ display: "none" })}
`;
const Toptext = styled.span`
text-decoration:underline;
cursor: pointer;
margin:0px 30px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
flex:3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductId = styled.span``;
const ProductName = styled.span``;
const Image = styled.img`
width:200px;
`;

const ProductDetail = styled.div`
flex:2;
display: flex;
`;

const PriceDetails = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`;

const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`;


const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius: 20px;
padding:20px;
height: 50vh;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr =styled.hr`
background-color: #eeeeee;
outline:none;
height:0.5px;
`;

const SummaryTitle = styled.h1`
font-weight:200;
`;


const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`;


const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
width:100%;
padding:10px;
background-color: #000;
color:#fff;
font-weight: 600;

`;

