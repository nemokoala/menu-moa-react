import { useInput } from "../../hooks/useInput";
import { Link } from "react-router-dom";
import { Button, Container, Form, Input, Label } from "./userPageStyles";

const Login = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>이메일</Label>
        <Input type="email" value={email} onChange={setEmail} />
        <Label>비밀번호</Label>
        <Input type="password" value={password} onChange={setPassword} />
        <Button type="submit">로그인</Button>
        <Link to="/register">회원가입하기</Link>
      </Form>
    </Container>
  );
};

export default Login;
