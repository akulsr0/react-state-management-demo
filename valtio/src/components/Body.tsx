import { Suspense } from "react";
import { useSnapshot } from "valtio";
import { store } from "../store";
import UserData from "./UserData";

export default function Body() {
  const { num, name } = useSnapshot(store);

  return (
    <main>
      <h1>{num}</h1>
      <h1>{name}</h1>
      <Suspense fallback="loading...">
        <UserData />
      </Suspense>
    </main>
  );
}
