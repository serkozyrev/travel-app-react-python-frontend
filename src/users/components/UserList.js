import React from "react";
import Card from "../../shared/components/UIElements/Card/Card";
import UserItem from "./UserItem";

import "./UserList.css";

const UserList = (props) => {
  if (typeof props.items === "string") {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="users-list">
        {props.items.map((user, index) => (
          <UserItem
            key={index}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
            image_type={user.image_type}
          />
        ))}
      </ul>
    );
  }
};

export default UserList;
