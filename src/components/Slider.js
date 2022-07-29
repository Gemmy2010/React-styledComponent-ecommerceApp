import React, {useState} from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { sliderItems } from "../data";


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                {item.description}
              </Description>
              <Button>SHOW MORE</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </SliderContainer>
  );
}

export default Slider;

const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff7f7;
  position: relative;
  overflow:hidden;
`;
const Wrapper = styled.div`
height: 100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props =>props.slideIndex * -100}vw)


`;

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props=>props.bg}

`;
const ImgContainer = styled.div`
height:100%;
flex: 1;
`;
const Image = styled.img`
height:80%;
width:80%;
margin-left:80px;
margin-top:80px;

`;
const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Title = styled.h1`
font-size:70px;
`;
const Description = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #32cd32;
  font-weight: 700;
  border-radius: 8px;

  &:hover {
    background-color: #32cd32;
    color: #fff;
  }
`;


const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #daa520;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index:2;

  > .MuiSvgIcon-root {
    color: #ffffff;
  }
`;

