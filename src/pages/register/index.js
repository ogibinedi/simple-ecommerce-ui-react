import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BgRegister } from '../../assets';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${BgRegister}) center;
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
    margin: 10px 0px;
`;

const Agreement = styled.p`
    color: white;
    font-size: 12px;
    font-weight: bold;
`;

const Button = styled.button`
    margin: 10px 0;
    padding: 10px;
    border: none;
    background-color: teal;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  const navigation = useNavigate();
  return (
    <Container>
        <Wrapper>
            <Title>BUAT AKUN BARU</Title>
            <Form>
                <Input placeholder="Nama Awal" />
                <Input placeholder="Nama Akhir" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Password Konfirmasi" />
                <Agreement>
                    Dengan mendaftar ke website ini, saya akan tunduk dan patuh terhadap ketentuan yang berlaku, data dipergunakan
                    sesuai dengan PRIVACY POLICY
                </Agreement>
                <Button onClick={() => navigation('/login')}>Buat Akun</Button>
                <Link to="/login" style={{ textAlign: "end", color: "teal"}}>Sudah Punya Akun?. Silahkan Login disinini.</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register