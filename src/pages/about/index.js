import styled from "styled-components";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Subscription from "../../components/subcription";
import { Brand } from "../../assets";
import Announcement from "../../components/announcement";
import { mobile } from "../../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    margin-top: 50px;
    padding: 50px;
    display: flex;
    padding: 50px;
    ${mobile({ flexDirection: "column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    ${mobile({ width: "100%", height: "50%"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ justifyContent: "center", textAlign: "center"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;


const About = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={Brand} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Tentang WeCommerce</Title>
                    <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae qui sequi laborum voluptas? Dolore, necessitatibus saepe. Fugiat totam, necessitatibus aut asperiores consequatur accusamus quibusdam tenetur reprehenderit laudantium. Sunt, inventore nihil.</Desc>
                </InfoContainer>
            </Wrapper>        
        <Subscription />
        <Footer />
    </Container>
  )
}

export default About;