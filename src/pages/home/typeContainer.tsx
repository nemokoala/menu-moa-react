import styled from "styled-components";

const types = [
  { name: "전체", url: "src/assets/images/전체.webp" },
  { name: "양식", url: "src/assets/images/양식.webp" },
  { name: "일식", url: "src/assets/images/일식.webp" },
  { name: "중식", url: "src/assets/images/중식.webp" },
  { name: "한식", url: "src/assets/images/한식.webp" },
  { name: "카페", url: "src/assets/images/카페.webp" },
  { name: "치킨", url: "src/assets/images/치킨.webp" },
  { name: "피자", url: "src/assets/images/피자.webp" },
];

interface TypeContainerProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TypeContainer: React.FC<TypeContainerProps> = ({
  category,
  setCategory,
}) => {
  return (
    <Container>
      {types.map((type) => (
        <FoodContainer
          key={type.name}
          $active={category === type.name}
          onClick={() => setCategory(type.name)}
        >
          <FoodImg src={type.url}></FoodImg>
          <span>{type.name}</span>
        </FoodContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  margin-top: 20px;
  padding: 20px;
  gap: 5px;
  border-radius: 20px;
  background-color: white;

  & span {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, auto));
  }
`;

const FoodContainer = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 10px;
  transition: border-bottom 0.3s;
  /* background-color: ${(props) =>
    props.$active ? "#e0e6ff !important" : ""}; */
  border-bottom: ${(props) =>
    props.$active ? "solid 10px #6f8cff !important" : ""};

  &:hover {
    border-bottom: solid 10px #c8d3ff;
    cursor: pointer;
  }
`;

const FoodImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export default TypeContainer;
