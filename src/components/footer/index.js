import { Facebook, Instagram, Twitter, YouTube, RoomOutlined, Phone, Mail } from "@mui/icons-material";
import styled from "styled-components";
import { Payment } from "../../assets";

const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 40vh;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    padding: 20px;
    flex-direction: column;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialIconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        color: teal;
    }
`;

const ContactItem = styled.address`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const PaymentMethod = styled.img`
    display: flex;
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>WEB-COMMERCE</Logo>
            <Desc>Belanja puas harga tidak kalah dengan penjual tradisional</Desc>
            <SocialIconContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E6002E">
                    <YouTube />
                </SocialIcon>
            </SocialIconContainer>
        </Left>
        <Center>
            <Title>Menu Navigasi</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Keranjang</ListItem>
                <ListItem>Pakaian Pria</ListItem>
                <ListItem>Pakaian Wanita</ListItem>
                <ListItem>Aksesoris</ListItem>
                <ListItem>Kelola Akun</ListItem>
                <ListItem>Lacak Pesanan</ListItem>
                <ListItem>WhishList</ListItem>
                <ListItem>Term</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomOutlined />&nbsp; Jl. Serpong Utara No. 1 - Tangerang Selatan
            </ContactItem>
            <ContactItem>
                <Phone />&nbsp; +622 123-456-789
            </ContactItem>
            <ContactItem>
                <Mail />&nbsp; contact@ogi.dev
            </ContactItem>
            <PaymentMethod src={Payment} />
        </Right>
    </Container>
  )
}

export default Footer