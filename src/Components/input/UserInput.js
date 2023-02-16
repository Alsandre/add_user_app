import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorMessage from '../error/ErrorMessage';

import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: "Invalid Input", message: "Please enter a valid name and age (non-empty values)"});
      return;
    }
    if (+enteredAge < 1) {
      setError({title: "Invalid Input", message: "Please enter a valid age (>0)"});
      return;
    }

    const dataLoad = {name: enteredName, age: enteredAge, id: Math.random().toString()};
    props.onAddUserHandler(dataLoad);

    setEnteredName("");
    setEnteredAge("");
  };
  const hideError = () => setError(null);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          type="text"
          onChange={nameChangeHandler}
          value={enteredName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
      {error && <ErrorMessage title={error.title} message={error.message} hideError={hideError}/>}
    </Card>
  );
};

export default UserInput;
