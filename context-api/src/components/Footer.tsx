import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Footer() {
  const { name, setName } = useContext(AppContext);

  return (
    <footer>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </footer>
  );
}
