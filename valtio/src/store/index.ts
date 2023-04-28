import { proxy } from "valtio";
import { derive } from "valtio/utils";

const userDataCache = new Map<number, IUserData>();

interface IUserData {
  picture: { thumbnail: string };
  name: { first: string; last: string };
  email: string;
}

interface IStore {
  num: number;
  name: string;
  userId: number;
}

export const store = proxy<IStore>({
  num: 0,
  name: "change me",
  userId: 1,
});

export const userDataState = derive({
  userData: async (get): Promise<IUserData> => {
    const id = get(store).userId;
    const cachedData = userDataCache.get(id);

    if (cachedData) return cachedData;

    const res = await fetch(`https://randomuser.me/api/?seed=${id}`);
    const data = await res.json();

    userDataCache.set(id, data.results[0]);

    return data.results[0];
  },
});

export function setNum(newNum: number) {
  store.num = newNum;
}

export function setName(newName: string) {
  store.name = newName;
}

export function setUserId(newId: number) {
  store.userId = newId;
}
