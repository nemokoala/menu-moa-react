import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <A to="/">메뉴모아</A>
      <Input placeholder="가게검색" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: var(--header-height);
  align-items: center;
  background-color: var(--main-color);
  /* padding: 0 25px; */
`;

const A = styled(Link)`
  width: 100px;
  height: 100%;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Input = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  padding: 0 10px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;
export default Header;
