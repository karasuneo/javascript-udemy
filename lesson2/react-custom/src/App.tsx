import "./App.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 3,
  name: "John",
  email: "3245678@cc.ac.jp",
  address: "foijdwfj",
};

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);

  

  const onClickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfiles(data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
