import { useDaumPostcodePopup } from "react-daum-postcode";
import { useInput } from "../../hooks/useInput";
import {
  Button,
  Container,
  ErorrText,
  Form,
  Input,
  Label,
} from "../user/userPageStyles";
import { useState } from "react";
import styled from "styled-components";
import api from "../../api";
import { showSuccessAlert } from "../../hooks/alert";
import { useNavigate } from "react-router-dom";

function StoreFactory() {
  const [name, setName, nameError] = useInput(
    "",
    /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\s]{1,15}$/,
    "가게 이름은 영어, 한글, 숫자만 포함된 1~15자리만 가능합니다."
  );
  const [address, setAddress] = useState("");
  const [tel, setTel, telError] = useInput(
    "",
    /^(01[016789]-\d{3,4}-\d{4}|0\d{1,2}-\d{3,4}-\d{4})$/,
    "숫자와 하이픈(-)을 포함시켜주세요."
  );
  const [content, setContent, contentError] = useInput(
    "",
    /^.{3,100}$/,
    "3~100 글자 사이로 내용을 입력해주세요."
  );
  const [category, setCategory, categoryError] = useInput(
    "",
    /^(양식|일식|전체|중식|치킨|카페|피자|한식)$/,
    "양식, 일식, 전체, 중식, 치킨, 카페, 피자, 한식 중에 선택해주세요."
  );

  const navigate = useNavigate();
  const open = useDaumPostcodePopup(); //우편주소 api

  const handleOpenPostcode = () => {
    open({
      onComplete: (data) => {
        console.log(data);
        setAddress(`${data.roadAddress} / ${data.zonecode}`);
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("/store", {
        name,
        address,
        tel,
        content,
        category,
      });

      showSuccessAlert(response.data.message);
      navigate("/");
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>가게 이름</Label>
        <Input value={name} onChange={setName} $isError={nameError} />
        <ErorrText>{nameError}</ErorrText>
        <Label>가게 주소</Label>
        <AddressButton onClick={handleOpenPostcode}>
          {address ? address : "클릭하여 주소 검색"}
        </AddressButton>
        <Label>가게 전화번호</Label>
        <Input value={tel} onChange={setTel} placeholder="02-xxx-xxx" />
        <ErorrText>{telError}</ErorrText>
        <Label>가게 설명</Label>
        <Input
          value={content}
          onChange={setContent}
          placeholder="---이 맛있는 가게 입니다."
        />
        <ErorrText>{contentError}</ErorrText>
        <Label>가게 업종</Label>
        <Input
          value={category}
          onChange={setCategory}
          placeholder="양식 | 한식 | 일식 | 중식"
        />
        <ErorrText>{categoryError}</ErorrText>
        <Button>가게 추가</Button>
      </Form>
    </Container>
  );
}

const AddressButton = styled(Input).attrs({ as: "button" })`
  text-align: left;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export default StoreFactory;
