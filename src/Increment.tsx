import { useState } from "react";

export default function Increment() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
    localStorage.setItem("counter", `${counter + 1}`);
  };
  return <div onClick={incrementCounter}>Increment {counter}</div>;
}
