import React, { useState, Fragment} from "react";

import UserInput from "./Components/input/UserInput";
import UserItem from "./Components/display/UserItem";

function App() {

  const [userList, setUserList] = useState([]);

  const addUser = (dataLoad) => {
    setUserList((prevState) => [...prevState, dataLoad]);
  };

  return (
    <Fragment>
      <UserInput onAddUserHandler={addUser} />
      <UserItem userData={userList} />
    </Fragment>
  );
}

export default App;
