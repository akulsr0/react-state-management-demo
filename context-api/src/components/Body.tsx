import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Body() {
  const { num, name } = useContext(AppContext);

  return (
    <main>
      <h1>{num}</h1>
      <h1>{name}</h1>
    </main>
  );
}
