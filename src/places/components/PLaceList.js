import React from "react";

import Card from "../../shared/components/UIElements/Card/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button/Button";

import "./PlaceList.css";

const PLaceList = (props) => {
  if (typeof props.items === "string") {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="place-list">
        {props.items.map((place) => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
            image_type={place.image_type}
            onDelete={props.onDeletePlace}
          />
        ))}
      </ul>
    );
  }
};

export default PLaceList;
