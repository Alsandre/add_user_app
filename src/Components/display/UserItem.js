import { useState } from "react";

import Card from "../UI/Card";

import classes from "./UserItem.module.css";

const UserItem = (props) => {
  let renderItem = [];
  if (props.userData.length > 0) {
    renderItem = props.userData.map((item) => {
      let nameToUpper = item.name.charAt(0).toUpperCase() + item.name.slice(1);
      return (
        <li key={item.id}>
          {nameToUpper} ({item.age} years old)
        </li>
      );
    });
  } else {
    renderItem = "please add user";
  }

  return (
    <Card className={classes["item-wrapper"]}>
      <ul>{renderItem}</ul>
    </Card>
  );
};

export default UserItem;
