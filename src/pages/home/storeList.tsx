import { Link } from "react-router-dom";
import styled from "styled-components";

const StoreList = ({ stores }) => {
  console.log(stores);
  return (
    <Container>
      {stores?.map((store) => (
        <Store to={`/store/${store.id}`} key={store.name}>
          <img src="src/assets/images/피자.webp" />
          <TextContent>
            <div>{store.name}</div>
            <div>{store.address}</div>
            <div>{store.tel}</div>
            <div>{store.category}</div>
          </TextContent>
        </Store>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  gap: 15px;
  border-radius: 20px;
  background-color: white;
`;

const Store = styled(Link)`
  width: 100%;
  display: grid;
  grid-template-columns: 100px auto;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); */
  border-radius: 20px;
  column-gap: 15px;
  background-color: aliceblue;

  & img {
    width: 100px;
    grid-row-start: 1;
    grid-row-end: 5;
    border-radius: 15px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & div:nth-child(1) {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export default StoreList;
