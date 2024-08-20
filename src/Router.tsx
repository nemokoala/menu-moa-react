import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat";
import Home from "./pages/home/home";
import { useRecoilValue } from "recoil";
import { userState } from "./state/userState";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Header from "./components/header";
import Store from "./pages/store/store";
import StoreFactory from "./pages/store/storeFactory";

const Router = () => {
  const user = useRecoilValue(userState);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/store/:id" element={<Store />} />
          <Route path="/store/add" element={<StoreFactory />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
