import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    window.addEventListener("storage", () => {
      const newValue = localStorage.getItem("counter");
      console.log(newValue);
      !!newValue && setCounter(+newValue);
    });
  }, []);
  const [counter, setCounter] = useState(localStorage.getItem("counter") || 0);
  return <div>Este es el contador: {counter}</div>;
}
