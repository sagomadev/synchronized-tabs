import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    window.addEventListener("storage", () => {
      // When local storage changes, dump the list to
      // the console.
      const newValue = localStorage.getItem("counter");
      console.log(newValue);
      !!newValue && setCounter(+newValue);
    });
  }, []);
  const [counter, setCounter] = useState(0);
  return <div>Este es el contador: {counter}</div>;
}
