import { atom } from "jotai";

interface IUserData {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
}

export const numAtom = atom<number>(0);
export const nameAtom = atom<string>("change me");

// Handling Async Data / State
export const userDataAtom = atom<IUserData>({} as IUserData);
export const fetchUserDataAtom = atom(
  (get) => get(userDataAtom),
  async (_, set) => {
    const res = await fetch(`https://randomuser.me/api/`);
    const data = await res.json();
    set(userDataAtom, data.results[0]);
  }
);
