import styled from 'styled-components';
import Navbar from '../../components/navbar';
import Announcement from '../../components/announcement';
import Footer from '../../components/footer';
import { Add, Favorite, Remove, ShoppingBag } from '@mui/icons-material';
import { Product1, Product3 } from '../../assets';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #${props => props.color};
    color: white;
    /* border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "#55ACEE" : "none"};
    color: ${(props) => props.type === "filled" && "white"}; */
`;

const TopTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TopTextWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    font-weight: bold;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    width: 100%;
    display: flex;
    flex: 2;
`

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColorWrap = styled.div`
    display: flex;
    align-items: center;
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span``

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:  24px;
    margin: 5px;
    margin-bottom: 20px;
`;

const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 300;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    flex-direction: column;
    border: 0.5px solid lightgray;
    padding: 20px;
    border-radius: 15px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.span`
    display: flex;
    align-items: center;
    margin: 30px 0px;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "20px"};
`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
    text-align: end;
`

const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: orange;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Keranjang Anda</Title>
            <Top>
                <TopButton color="55ACEE">Lanjut Belanja</TopButton>
                <TopTexts>
                    <TopTextWrap>
                        <ShoppingBag style={{ color: "blue" }} />
                        <TopText>Keranjang Belanja (2)</TopText>
                    </TopTextWrap>
                    <TopTextWrap>
                        <Favorite style={{ color: "red" }} />
                        <TopText>Daftar Wishlist (0)</TopText>
                    </TopTextWrap>
                </TopTexts>
                <TopButton color="008080">Checkout Sekarang</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={Product1} />
                            <Details>
                                <ProductName><b>Produk:</b> Sneaker Anak Muda</ProductName>
                                <ProductId><b>ID:</b> 986684274240</ProductId>
                                <ProductColorWrap><b>Warna:</b>&nbsp; <ProductColor color='darkblue' /></ProductColorWrap>
                                <ProductSize><b>Ukuran:</b> 42</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove style={{ cursor: "pointer", color: "red"}} />
                                <ProductAmount>2</ProductAmount>
                                <Add style={{ cursor: "pointer", color: "blue"}} />
                            </ProductAmountContainer>
                            <ProductPrice>IDR 270000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src={Product3} />
                            <Details>
                                <ProductName><b>Produk:</b> C59 T-SHIRT</ProductName>
                                <ProductId><b>ID:</b> 986684274240</ProductId>
                                <ProductColorWrap><b>Warna:</b>&nbsp; <ProductColor color='gray' /></ProductColorWrap>
                                <ProductSize><b>Ukuran:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove style={{ cursor: "pointer", color: "red"}} />
                                <ProductAmount>1</ProductAmount>
                                <Add style={{ cursor: "pointer", color: "blue"}} />
                            </ProductAmountContainer>
                            <ProductPrice>IDR 75000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>IDR 345000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimasi Pengiriman</SummaryItemText>
                        <SummaryItemPrice>IDR 10000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Diskon Pengiriman</SummaryItemText>
                        <SummaryItemPrice>IDR 10000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >TOTAL</SummaryItemText>
                        <SummaryItemPrice >IDR 345000</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart