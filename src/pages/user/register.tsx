import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Button, Container, Form, Input, Label } from "./userPageStyles";

const Register = () => {
  const [nickname, setNickname] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [passwordConfirm, setPasswordConfirm] = useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>닉네임</Label>
        <Input type="text" value={nickname} onChange={setNickname} />
        <Label>이메일</Label>
        <Input type="email" value={email} onChange={setEmail} />
        <Label>비밀번호</Label>
        <Input type="password" value={password} onChange={setPassword} />
        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          value={passwordConfirm}
          onChange={setPasswordConfirm}
        />
        <Button type="submit">회원가입</Button>
        <Link to="/login">로그인하기</Link>
      </Form>
    </Container>
  );
};

export default Register;
