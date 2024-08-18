import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 90%;
  max-width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #a9d3fa;
  padding: 25px;
  border-radius: 10px;

  & a {
    margin-top: 20px;
    text-align: center;
  }
`;
export const Label = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  border: 0;

  &:focus {
    border-color: #3498db; /* 포커스 시 테두리 색상 */
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5); /* 포커스 시 추가 효과 (선택 사항) */
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 30px;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: white;
`;
