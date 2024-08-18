import { useEffect, useState } from "react";
import io from "socket.io-client";
import api from "../api";

const socket = io(import.meta.env.VITE_API_URL);

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const connectChat = async () => {
    try {
      const response = await api.get("/chat");
      console.log(response);
      setMessages(response.data);

      socket.on("chat message", (msg: string) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    connectChat();

    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={(e) => (e.key === "Enter" ? sendMessage() : null)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
