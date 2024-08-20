import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo to="/">메뉴모아</Logo>
      <div>
        <Input placeholder="가게검색" />
        <LoginContainer>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </LoginContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-evenly;
  width: 100%;
  height: var(--header-height);
  align-items: center;
  background-color: var(--main-color);
  top: 0;

  & div {
    display: flex;
    gap: 10px;
  }
`;

const Logo = styled(Link)`
  width: fit-content;
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

const LoginContainer = styled.div`
  display: flex;
  height: 35px;
  gap: 10px;

  & a {
    height: 100%;
    padding: 0 15px;
    background-color: white;
    border-radius: 7px;
  }
`;
export default Header;
