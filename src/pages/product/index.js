import styled from "styled-components";
import Announcement from '../../components/announcement';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Products from "../../components/product";
import Subscription from "../../components/subcription";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Pakaian</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Produk: </FilterText>
                <Select>
                    <Option disabled selected>Pilih Berdasarkan Warna:</Option>
                    <Option>Merah</Option>
                    <Option>Kuning</Option>
                    <Option>Abu-abu</Option>
                    <Option>Biru</Option>
                    <Option>Maroon</Option>
                    <Option>Coklat</Option>
                </Select>
                <Select>
                    <Option disabled selected>Pilih Berdasarkan Ukuran:</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Urutkan Produk: </FilterText>
                <Select>
                    <Option disabled selected>Terbaru:</Option>
                    <Option>Harga (Asc)</Option>
                    <Option>Harga (Desc)</Option>
                </Select>
            </Filter>

        </FilterContainer>
        <Products />
        <Subscription />
        <Footer />
    </Container>
  )
}

export default ProductList;