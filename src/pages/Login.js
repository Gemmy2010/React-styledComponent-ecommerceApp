import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>FORGOTTEN PASSWORD?</Link>
          <Link>CREATE A NEW PASSWORD</Link>
        </Form>
      </Wrapper>
    </LoginContainer>
  );
}

export default Login;




const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.lifehack.org/wp-content/uploads/2014/06/Fruits-and-vegetables.jpg")
      center;
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px  0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #32cd32;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.a`
margin: 5px;
font-size: 12px;
text-decoration: underline;

`;