import styled from "styled-components";
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    padding: 5px 10px;
    width : 100%;
    margin-right: 5px;
    border-radius: 25px;
`;

// const Language = styled.span`
//     cursor: pointer;
//     font-size: 14px;
//     color: red;
// `;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Container = styled.div`
    height: 60px;
    background-color: darkblue;
    color: white;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    @media screen and (max-width: 480px) {
        ${Left} {
            display: none;
        }
        ${Right} {
            display: none;
        }
    }
    @media screen and (max-width: 768px) {
        ${Left} {
            display: none;
        }
    }
    @media screen and (max-width: 820px) {
        ${Left} {
            display: none;
        }
    }
`;

const Navbar = () => {
  const navigation = useNavigate();
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo onClick={() => navigation('/')}>WeCommerce</Logo>
                <SearchContainer>
                    <Input />
                    <Search style={{ color: "grey", fontSize: "16px"}} />
                </SearchContainer>
            </Left>
            <Center>
              <MenuItem onClick={() => navigation('/products')}>PRODUCTS</MenuItem>
              <MenuItem onClick={() => navigation('/product')}>PRODUCT</MenuItem>  
              <MenuItem onClick={() => navigation('/about')}>ABOUT</MenuItem>  
              <MenuItem onClick={() => navigation('/contact')}>CONTACT</MenuItem>  
            </Center>
            <Right>
                <MenuItem onClick={() => navigation('/login')}>LOGIN</MenuItem>
                <MenuItem onClick={()=> navigation('/register')}>REGISTER</MenuItem>
                <MenuItem onClick={() => navigation('/cart')}>
                    <Badge badgeContent={4} color="secondary" >
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar