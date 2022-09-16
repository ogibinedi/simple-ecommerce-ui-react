import styled from "styled-components";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Subscription from "../../components/subcription";
import { Brand, Payment } from "../../assets";
import { Mail, Phone, Room } from "@mui/icons-material";
import Announcement from "../../components/announcement";

const Container = styled.div`
`;

const Wrapper = styled.div`
    margin-top: 50px;
    padding: 50px;
    display: flex;
    padding: 50px;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const PaymentMethod = styled.img`
    display: flex;
    width: 50%;
`;

const PaymentTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;

`;
const Contact = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={Brand} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Contact WeCommerce</Title>
                    <Desc>
                        <address style={{ marginBottom: "20px"}}>
                            <span><Room /> &nbsp; Jl. Serpong Utara No. 1 - Tangerang Selatan</span> <br />
                            <span><Phone /> &nbsp; +622 123-456-789</span> <br />
                            <span><Mail /> &nbsp; contact@ogi.dev</span>
                        </address>
                        <PaymentTitle>Support Pembayaran Melalui:</PaymentTitle>
                        <PaymentMethod src={Payment} />
                    </Desc>
                </InfoContainer>
            </Wrapper>        
        <Subscription />
        <Footer />
    </Container>
  )
}

export default Contact;