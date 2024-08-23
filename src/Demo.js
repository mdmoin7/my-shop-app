import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Demo() {
  const name = "mike";
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  // return something always
  useEffect(() => {
    const socket = io("ws://localhost:3002");
    socket.on("server-data", (data) => {
      setData(data.message);
    });
    // unmounting
    return () => {
      // unload logic here
      socket.off("server-data");
    };
  }, [
    // dependencies
    // values that are going to affect the invokation of the function
    // empty array : no deps : on load
    count, // whenever the value of count will change
  ]);
  return (
    <div>
      <h1>{data}</h1>
      <p>some more content</p>
      <p>{name}</p>
      <p>{name.toUpperCase()}</p>
      <p>{8 + 9}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Demo;
