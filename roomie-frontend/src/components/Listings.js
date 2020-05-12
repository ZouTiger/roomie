import React, { useState, useEffect, useContext } from "react";
import "./../components/styles.css";
import axios from "axios";

function ListingCard(props) {
  return (
    <div className="myCard">
      <div>
        <p>{props.count}</p>
        <p>{props._id}</p>
        <p>{props.title}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.country}</p>
        <p>{props.zip}</p>
        <p>{props.utilitiesIncl}</p>
        <p>{props.rent}</p>
      </div>
    </div>
  );
}

function Listings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "/api/listings",
        });

        setData(response.data.data.listings);
      } catch (error) {
        return alert(
          "Something went wrong while trying to fetch the Listings...🧐"
        );
      }
    };
    fetchListings();
  }, []);

  const allLists = data.map((el, index) => (
    <ListingCard key={el._id} {...el} count={index + 1} />
  ));

  return (
    <div>
      <h1>Listings:</h1>
      <div className="cardContainer">{allLists}</div>
    </div>
  );
}

export default Listings;
