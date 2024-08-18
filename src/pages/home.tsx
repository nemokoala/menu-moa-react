import styled from "styled-components";

const types = [
  { name: "전체", url: "src/assets/images/전체.webp" },
  { name: "양식", url: "src/assets/images/양식.webp" },
  { name: "일식", url: "src/assets/images/일식.webp" },
  { name: "중식", url: "src/assets/images/중식.webp" },
  { name: "한식", url: "src/assets/images/한식.webp" },
];

const Home = () => {
  return (
    <Container>
      <TypeContainer>
        {types.map((type) => (
          <div>
            <FoodImg src={type.url}></FoodImg>
            <span>{type.name}</span>
          </div>
        ))}
      </TypeContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
`;

const TypeContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  margin-top: 20px;
  padding: 20px;
  gap: 15px;
  border-radius: 20px;
  background-color: white;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  & span {
    font-size: 1.2rem;
  }
`;
const FoodImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export default Home;
