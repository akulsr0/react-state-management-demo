import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Header() {
  const { setNum } = useContext(AppContext);

  return (
    <header>
      <button onClick={() => setNum((p) => p + 1)}>Increase Num</button>
      <button onClick={() => setNum((p) => p - 1)}>Decrease Num</button>
    </header>
  );
}
