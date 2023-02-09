import React from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import styles from "./trip.module.css";
import Button from "@/components/button/Button";

const Id = ({ trip }) => {
  return (
    <div>
      <Navbar />
      <Link href="/">Back</Link>
      <div className={styles.tripMain}>
        <div className={styles.textBoxWraper}>
          <div className={styles.textBox}>
            <h1>{trip.destination}</h1>
            <p>{trip.description}</p>
            <h4>{`Data: ${trip.date} `}</h4>
            <h4>{`Duration: ${trip.duration} d`}</h4>
            <h1>{`${trip.price} €`}</h1>
          </div>
          <Button text="Book !!!" />
        </div>
        <div className={styles.imgWraper}>
          <img src={trip.imageUrl} />
        </div>
      </div>
    </div>
  );
};
export default Id;

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;
  const response = await axios.get(
    `https://63e3caca619fce55d4219490.mockapi.io/trips/${id}`
  );
  return {
    props: {
      trip: response.data,
    },
  };
}
