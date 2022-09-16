import styled from 'styled-components';

import { useNavigate, Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: darkblue;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: rgba(255,255,255,0.3);
    border-radius: 15px;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 24px;
    color: white;
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


const Reset = () => {
  const navigation = useNavigate();
  return (
    <Container>
        <Wrapper>
            <Title>RESET PASSWORD</Title>
            <Form>
                <Input placeholder="Email" />
                <Button onClick={() => navigation('/')}>Kirim Link Reset Password</Button>
                <LinkWrapper>
                    <Link to="/login" style={{ textAlign: "start", color: "yellow" }}>Kembali ke Halaman Login</Link>
                    <Link to="/register" style={{ textAlign: "end", color: "yellow" }}>Belum punya akun?. Silahkan daftar disini.</Link>
                </LinkWrapper>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Reset