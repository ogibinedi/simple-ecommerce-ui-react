import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    border-radius: 5px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    &:hover ${Info} {
        transition: all 0.75s ease-in;
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: darkorange;
    position: absolute;
`;

const Image = styled.img`
    width: 50%;
    height: 45%;
    z-index: 2;
`;

const Icon = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    /* transition: all 0.5s; */

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const ProductItem = ({product}) => {
  return (
    <Container>
        <Circle />
        <Image src={product.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem