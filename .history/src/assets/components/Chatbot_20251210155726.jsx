import { useState } from "react";

const QnA = [
  { question: "Who are you?", answer: "Hi, I'm Armel, a Web Developer." },
  { question: "What do you do?", answer: "I build responsive and elegant websites using React, Laravel, WordPress, and more." },
  { question: "How can I contact you?", answer: "You can reach me via the contact form on this site." },
  // add more Q&A here
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me anything about me 👋" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);

    const found = QnA.find(
      (q) => q.question.toLowerCase() === input.toLowerCase()
    );

    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      {
        from: "bot",
        text: found ? found.answer : "Sorry, I don't know the answer to that yet.",
      },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white dark:bg-[#2E186A] shadow-lg rounded-xl p-4">
      <div className="h-64 overflow-y-auto mb-2 flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              msg.from === "bot"
                ? "bg-gray-100 dark:bg-[#3b2b70] self-start"
                : "bg-[#2E186A] text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-700"
          placeholder="Ask me something..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-[#2E186A] text-white px-4 py-2 rounded-lg hover:bg-[#3b1f8b] transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
