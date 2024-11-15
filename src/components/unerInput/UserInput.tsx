import { useState } from "react";
export default function UserInput() {
  const [input, setInput] = useState<string>("");

  const handler = (value: string) => {
    setInput(value);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-600">{input}</h1>
      <input
        value={input}
        onChange={(e) => handler(e.target.value)}
        className="border-2 m-4 rounded-md px-2"
        type="text"
      />
    </div>
  );
}
