import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { PlacesContext } from "../context/PlacesContext";
import { UserContext } from "../context/UserContext";
import ManageButtons from "../components/ManageButtons";
import PlaceCard from "../components/PlaceCard";

function CurrentPlace() {
  const { places } = useContext(PlacesContext);
  const { user } = useContext(UserContext);

  const currentPlaceTitle = useParams().title;
  const placeInfo = places.find((place) => place.title === currentPlaceTitle);
  const otherPlaces = places.filter(
    (place) => place.title !== currentPlaceTitle
  );
  

  const randomIndexes = useMemo(()=>otherPlaces.length && getRandomIndexes(),[placeInfo])

  

  function getRandomIndexes() {
    let indexes = [];
    for (let i = 0; indexes.length < 3; i++) {
      let random = Math.floor(Math.random() * otherPlaces.length);
      if (!indexes.includes(random)) {
        indexes.push(random);
      }
    }
    return indexes;
  }

  return (
    <>
      <div className="place__cover">
        <div className="container">
          <h1>{placeInfo?.title}</h1>
        </div>
      </div>
      <div className="place__wrapper">
        <div className="container">
          <div className="place__subtitle">
            <h2>{placeInfo?.subtitle}</h2>
            <ManageButtons place={placeInfo} />
          </div>
          <h4>Here you will see tags, location,adress, openinghours etc.</h4>
          <h3>{placeInfo?.description?.header}</h3>
          <p>{placeInfo?.description?.descriptionText}</p>
        </div>
        <h3>here will be a slider</h3>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47889.30337708749!2d2.186647209753403!3d41.394037245617504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2z0KXRgNCw0Lwg0KHQstGP0YLQvtCz0L4g0KHQtdC80LXQudGB0YLQstCw!5e0!3m2!1sru!2ses!4v1719500257783!5m2!1sru!2ses"
            width="auto"
            height="600"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h3>You may also like</h3>
          <hr color="black" />
          <div className="grid__places">
            {otherPlaces.map((place, id) => {
              if (randomIndexes.includes(id)) {
                return <PlaceCard user={user} place={place} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentPlace;
