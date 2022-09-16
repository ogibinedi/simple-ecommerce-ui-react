import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {BgLogin} from '../../assets';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${BgLogin}) center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 15px;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 24px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
`;

const Button = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: none;
    background-color: teal;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`;

const LinkWrapper = styled.span`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Login = () => {
  const navigation = useNavigate();
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button onClick={() => navigation('/')}>Login</Button>
                <LinkWrapper>
                    <Link to="/reset-password" style={{ textAlign: "start", color: "teal" }}>Lupa Password?.</Link>
                    <Link to="/register" style={{ textAlign: "end", color: "teal" }}>Belum punya akun?. Silahkan daftar disini.</Link>
                </LinkWrapper>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login