import { useAtom } from "jotai";
import { numAtom, fetchUserDataAtom } from "../store";

export default function Header() {
  const [, setNum] = useAtom(numAtom);
  const [, fetchAndSetUserData] = useAtom(fetchUserDataAtom);

  return (
    <header>
      <button onClick={() => setNum((p) => p + 1)}>Increase Num</button>
      <button onClick={() => setNum((p) => p - 1)}>Decrease Num</button>
      <button onClick={() => fetchAndSetUserData()}>Fetch User</button>
    </header>
  );
}
