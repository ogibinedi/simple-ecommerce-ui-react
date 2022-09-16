import { Send } from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 40px;
    border: 1px solid lightgrey;
`;

const Input = styled.input`
    border: none;
    padding: 10px;
    width: 100%;
    flex: 8;
`;

const Button = styled.button`
    padding: 6px;
    background-color: orange;
    border: none;
    flex: 1;
`;

const Subscription = () => {
  return (
    <Container>
        <Title>Subscription Form</Title>
        <Description>
            Silahkan kirimkan email anda melalui form dibawah ini, <br />
            untuk berlangganan informasi produk apa saja yang terbaru
        </Description>
        <InputContainer>
            <Input placeholder="Masukan email anda disini" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Subscription