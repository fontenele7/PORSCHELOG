import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background: #3a3a41;
    
        display: flex;
        align-items: center;
         justify-content: center;

`;

const Wrapper = styled.div`
   height: 70vh;
   width: 80vw;           
   background-color: #ffffff;
   padding: .6rem;
   border-radius: .6rem;
   display: flex;
   justify-content: center;
   align-items: center;
    
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
   text-align: center;
    font-size: 30px;
    font-weight: 15px;
    padding: 35px;
    display: flex;
`;

const Form = styled.form`
    padding: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28rem;
    margin: 3rem;
`;

const Input = styled.input`
width: 100%;
border: solid 1px #ccc;
outline: none;
padding: .5rem;
font-size: 1rem;
border-radius: .3rem;
margin-bottom: 1rem;

`;

const Button = styled.button`

color: white;
width: 16rem;
margin: .3rem;
background: #3b3b3b;
border: solid 1px #9e9099;
outline: none;
padding: .5rem;
font-size: 1rem;
border-radius: .3rem;
margin-bottom: .5rem;
cursor: pointer;
height: 45px;

&:hover {
    transition: all .4s ease;
    background-color: #9a1212;
    width: 17rem;
}

`;

const Link = styled.a`
    
     text-align: center;
    text-decoration: none;
    margin: 1px 0px;
    font-size: 13px; 
    cursor: pointer;

    &:hover{
       color: #9a1212;
    }
`;
const Img = styled.img`
    margin: 5px;
`
const LabelForm = styled.label`
    align-self: flex-start;
    color: #919191;

    
`;
        
const Login = () => {
  return (
    <Container>
        <Wrapper>
        <img src="https://media.tenor.com/Tpd5nocauQ4AAAAC/porsche-car.gif" />
            <Form>
                <Title>Login</Title>
               
                <LabelForm for="email">E-mail</LabelForm>
                <Input placeholder="Digite seu Email" />
                <LabelForm for="password">Senha</LabelForm>
                <Input placeholder="Digite sua senha" />
                <Button type="submit">Login</Button>
                <Link>Criar conta</Link>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Login;