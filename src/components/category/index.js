import styled from "styled-components";
import { categories } from "../../assets/data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    
    @media screen and (max-width: 480px) {
        display: flex;
        flex: 1;
        flex-direction: column;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        flex: 2;
        flex-direction: column;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 820px) {
        display: flex;
        flex: 2;
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

const Categories = () => {
  return (
    <Container>
        {categories.map((category, index) => (
            <CategoryItem category={category} key={index} />
        ))}
    </Container>
  )
}

export default Categories