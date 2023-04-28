import { useSnapshot } from "valtio";
import { store, setNum, setUserId } from "../store";

export default function Header() {
  const { num, userId } = useSnapshot(store);

  return (
    <header>
      <button onClick={() => setNum(num + 1)}>Increase Num</button>
      <button onClick={() => setNum(num - 1)}>Decrease Num</button>
      <div className="fetch-user-wrapper">
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.valueAsNumber)}
        />
      </div>
    </header>
  );
}
