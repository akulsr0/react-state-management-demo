import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("change me");

  return (
    <>
      <Header setNum={setNum} />
      <Body num={num} name={name} />
      <Footer name={name} setName={setName} />
    </>
  );
}

export default App;
