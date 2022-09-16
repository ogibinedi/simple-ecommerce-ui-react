import styled from "styled-components"

const Container = styled.div`
    background-color: teal;
    padding: 5px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Hello big sales and big deals 50% Off
    </Container>
  )
}

export default Announcement