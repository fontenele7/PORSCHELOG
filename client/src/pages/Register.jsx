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
height: 88vh;
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

const Agreement = styled.span`
    height: 2vh;
    font-size: 12px;
    margin: 20px 0px;
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
    width: 18rem;
    color: #2a2a2a;
    transition: all .4s ease;
    background-color: #919191;
    opacity: 0.5;

`
const LabelForm = styled.label`
    align-self: flex-start;
    color: #919191;
`
;
 
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <img src="https://media.tenor.com/Tpd5nocauQ4AAAAC/porsche-car.gif" />
            <Form>
            <Title>Crie sua conta</Title>
                <LabelForm for="name">Nome</LabelForm>
                <Input placeholder="nome" />
                <LabelForm for="name">Nome de usuário</LabelForm>
                <Input placeholder="nome de usuário" />
                <LabelForm for="email">E-mail</LabelForm>
                <Input placeholder="email" />
                <LabelForm for="Password">Senha</LabelForm>
                <Input placeholder="senha" />
                <LabelForm for="email">Confirmar senha</LabelForm>
                <Input placeholder="confirme sua senha" />
                <Agreement>
                Ao criar uma conta, concordo com o tratamento dos meus dados pessoais
                 de acordo com a <b>POLÍTICA DE PRIVACIDADE</b>
                </Agreement>
                <Button>Registrar</Button>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Register;