import { useAtom } from "jotai";
import { nameAtom, numAtom, userDataAtom } from "../store";

export default function Body() {
  const [num] = useAtom(numAtom);
  const [name] = useAtom(nameAtom);
  const [userData] = useAtom(userDataAtom);

  return (
    <main>
      <h1>{num}</h1>
      <h1>{name}</h1>
      {Object.keys(userData).length <= 0 ? (
        <h3>Click `Fetch User` to get user details</h3>
      ) : (
        <div className="user-data-wrapper">
          <img src={userData.picture.thumbnail} />
          <div>
            <strong>
              {userData.name.first} {userData.name.last}
            </strong>
            <p>{userData.email}</p>
          </div>
        </div>
      )}
    </main>
  );
}
