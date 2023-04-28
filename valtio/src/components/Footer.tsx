import { useSnapshot } from "valtio";
import { store, setName } from "../store";

export default function Footer() {
  const { name } = useSnapshot(store);
  return (
    <footer>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </footer>
  );
}
