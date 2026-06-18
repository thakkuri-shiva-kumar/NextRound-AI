import { useState } from "react";
import { sendMessage as apiSendMessage } from "../services/api";

function ChatBox() {
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am NextRound AI. Ask me HR, Resume, Technical or Mock Interview questions.",
    },
  ]);

  const handleSend = async (customMessage = null) => {
    const messageToSend = customMessage || input;

    if (!messageToSend.trim()) return;

    const userMessage = {
      sender: "user",
      text: messageToSend,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setLoading(true);

    try {
      const data = await apiSendMessage(messageToSend);

      const botMessage = {
        sender: "bot",
        text: data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Backend connection error.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <h2 className="text-4xl font-bold text-center text-white mb-8">
        AI Interview Coach
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">

        <button
          onClick={() => handleSend("Start HR Interview")}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg"
        >
          HR Interview
        </button>

        <button
          onClick={() => handleSend("Start Python Interview")}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg"
        >
          Python Interview
        </button>

        <button
          onClick={() => handleSend("Review My Resume")}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg"
        >
          Resume Review
        </button>

        <button
          onClick={() => handleSend("Start Mock Interview")}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg"
        >
          Mock Interview
        </button>

      </div>

      <div className="bg-slate-800 rounded-2xl p-5 h-[500px] overflow-y-auto">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-4 ${
              msg.sender === "user"
                ? "text-right"
                : "text-left"
            }`}
          >
            <span
              className={`inline-block max-w-[80%] px-4 py-3 rounded-xl ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-white"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}

        {loading && (
          <div className="text-slate-300">
            Thinking...
          </div>
        )}

      </div>

      <div className="flex gap-3 mt-5">

        <input
          type="text"
          placeholder="Ask interview questions..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 p-4 rounded-xl bg-slate-700 text-white outline-none"
        />

        <button
          onClick={() => handleSend()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;