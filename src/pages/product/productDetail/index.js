import styled from "styled-components";
import Announcement from "../../../components/announcement";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Subscription from "../../../components/subcription";
import { Product1 } from "../../../assets";
import { Add, Remove, ShoppingBag } from "@mui/icons-material";

const Container = styled.div`

`;

const Wrapper = styled.div`
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

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
`;

const FilterTitle = styled.span`
    font-weight: 300;
    font-size: 20px;
    margin-right: 10px;
`;

const FilterColor = styled.div`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`;

const Select = styled.select`
    padding: 0 10px;
`;

const Size = styled.option`

`;

const AddContainer = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

const Button = styled.button`
    display: flex;
    padding: 5px 10px;
    border: none;
    background-color: teal;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={Product1} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Sneaker Anak Muda</Title>
                    <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae qui sequi laborum voluptas? Dolore, necessitatibus saepe. Fugiat totam, necessitatibus aut asperiores consequatur accusamus quibusdam tenetur reprehenderit laudantium. Sunt, inventore nihil.</Desc>
                    <Price>IDR 150.000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Pilih Warna:</FilterTitle> 
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Pilih Ukuran:</FilterTitle>
                            <Select>
                                <Size disabled selected>Pilih ukuran</Size>
                                <Size>XS</Size>
                                <Size>S</Size>
                                <Size>M</Size>
                                <Size>L</Size>
                                <Size>XL</Size>
                                <Size>XXL</Size>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{ cursor: "pointer", color: "red" }} />
                            <Amount>1</Amount>
                            <Add style={{ cursor: "pointer", color: "blue" }} />
                        </AmountContainer>
                        <Button>
                            <ShoppingBag /> Tambah
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>        
        <Subscription />
        <Footer />
    </Container>
  )
}

export default Product