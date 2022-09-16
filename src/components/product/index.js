import styled from "styled-components";
import ProductItem from "./ProductItem";
import { popularProducts } from "../../assets/data";

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
        ))}
    </Container>
  )
}

export default Products