import { useSnapshot } from "valtio";
import { userDataState } from "../store";

export default function UserData() {
  const { userData } = useSnapshot(userDataState);
  return (
    <>
      {Object.keys(userData).length <= 0 ? null : (
        <div className="user-data-wrapper">
          <img src={userData.picture.thumbnail} alt="user-img" />
          <div>
            <strong>
              {userData.name.first} {userData.name.last}
            </strong>
            <p>{userData.email}</p>
          </div>
        </div>
      )}
    </>
  );
}
