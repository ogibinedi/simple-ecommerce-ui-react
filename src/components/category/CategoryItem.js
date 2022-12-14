import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: yellow;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: darkorange;
        color: white;
    }
`;

const CategoryItem = ({category}) => {
  return (
    <Container>
        <Image src={category.img} />
        <Info>
            <Title>{category.title}</Title>
            <Button>Belanja Sekarang</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem