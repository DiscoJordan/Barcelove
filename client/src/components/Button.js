import React from "react";

const Button = ({ content, onClick, close, arrow,reversed }) => {
    const iconMap = {
      "Log In": "login",
      "Continue": "login",
      "Sign In": "how_to_reg",
      "Log Out": "logout",
      "Profile": "account_circle",
      "Edit Profile": "tune",
      "Add new Place": "add_circle",
      "Search": "search",
      "Update": "update",
      "Explore Barcelona with us": "how_to_reg",
      'Save Changes': "update",

      //////////////////// tags
      "Select tags": "shoppingmode",
      "Museum": "museum",
      "Park": "nature_people",
      "Restaurant": "restaurant",
      "Mountain": "landscape_2",
      "Observation deck": "vrpano",
      "Temple": "synagogue",
      "Сountryside": "forest",
      "Attraction": "attractions",
      "Free": "savings",
      "In City": "location_city",
      };

    return (
      <div className={reversed?'navigation__button reversed':'navigation__button'}onClick={onClick ? onClick : null}>
        {iconMap[content] && (
          <span className="material-symbols-outlined">{iconMap[content]}</span>
        )}
        {iconMap[content] === "search" ? '' :<>{content}</>}
        
        {close ? <span className="material-symbols-outlined">close</span>: ''}
        {arrow==='up' ? <span className="material-symbols-outlined">keyboard_arrow_up</span>: ''}
        {arrow==='down' ? <span className="material-symbols-outlined">keyboard_arrow_down</span>: ''}
      </div>
    );
  };

export default Button;
