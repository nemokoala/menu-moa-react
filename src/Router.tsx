import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat";
import Home from "./pages/home";
import { useRecoilValue } from "recoil";
import { userState } from "./state/userState";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Header from "./components/header";

const Router = () => {
  const user = useRecoilValue(userState);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route
              path="*"
              element={<Navigate replace to={"/login"} />}
            ></Route> */}
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
