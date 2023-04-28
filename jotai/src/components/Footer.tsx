import { useAtom } from "jotai";
import { nameAtom } from "../store";

export default function Footer() {
  const [name, setName] = useAtom(nameAtom);

  return (
    <footer>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </footer>
  );
}
