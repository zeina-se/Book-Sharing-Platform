import React from "react";
import "./style.css";

const AppartmentCard = ({ appartment }) => {
  return (
    <div class="flex column placeCard">
      <div class="rounded imagePlace">
        <img src={appartment.pic_url} alt="Place" />
      </div>
      <div class="placeDetails">
        <p class="strong">
          {appartment.name}, {appartment.location}
        </p>
        <p class="secondary">{appartment.created_at}</p>
        <p class="underline">
          <span class="bold"> {appartment.price_night} $ </span> Total
        </p>
      </div>
    </div>
  );
};

export default AppartmentCard;
