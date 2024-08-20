import { useState } from "react";
import styled from "styled-components";
import TypeContainer from "./typeContainer";
import { useQuery } from "react-query";
import api from "../../api";
import StoreList from "./storeList";

const Home = () => {
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);
  const {
    data: stores,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["stores", page],
    queryFn: async () => {
      return (await api.get("/store")).data;
    },
    staleTime: 1000 * 60 * 5, //5분
  });
  return (
    <Container>
      <Title>원하시는 업종을 선택해주세요.</Title>
      <TypeContainer category={category} setCategory={setCategory} />
      {isLoading ? (
        <Title>가게 정보 로딩 중...</Title>
      ) : (
        <StoreList stores={stores} />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.span`
  font-size: 1.7rem;
  margin: 10px 0;

  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

export default Home;
