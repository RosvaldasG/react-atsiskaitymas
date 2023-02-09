import React from "react";
import styles from "./styles.module.css";
import Router from "next/router";

const Maping = ({ trip }) => {
  const onClickHandler = () => {
    Router.push(`/trip/${trip.id}`);
  };
  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.box}>
        <div className={styles.imgBox}>
          <img src={trip.imageUrl} />
          <div className={styles.priceBox}>{`${trip.price} €`}</div>
        </div>
        <div className={styles.textBox}>
          <h2>{trip.destination}</h2>
          <p>{trip.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Maping;

// onClick={onClickHandler(trip.id)}
