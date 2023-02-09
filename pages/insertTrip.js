import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Input from "@/components/input/Input";
import { useState } from "react";
import Button from "@/components/button/Button";
import axios from "axios";
import Router from "next/router";
import styles from "../styles/Home.module.css";

const insertTrip = () => {
  const [destination, setDestination] = useState();
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const onClickHandler = () => {
    const tripData = {
      destination: destination,
      date: date,
      duration: duration,
      imageUrl: imageUrl,
      price: price,
      description: description,
    };
    console.log(tripData);

    axios
      .post("https://63e3caca619fce55d4219490.mockapi.io/trips", tripData)
      .then((res) => {
        // console.log(res.data.jwt_token);
        console.log(res.data);
        // localStorage.setItem("user_jwt", res.data.jwt_token);
        // document.cookie = `jwt_token= ${res.data.jwt_token}`;
        // alert(res.data.response);
        Router.push("/");
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response.data.response);
      });
  };

  return (
    <div>
      <Navbar />
      <Link href="/">Back</Link>

      <div className={styles.inputWraper}>
        <Input
          type="text"
          value={destination}
          placeholder="Destination"
          onChange={setDestination}
        />
        <Input type="text" value={date} placeholder="Date" onChange={setDate} />
        <Input
          type="number"
          value={duration}
          placeholder="Duration"
          onChange={setDuration}
        />
        <Input
          type="text"
          value={imageUrl}
          placeholder="Image URL"
          onChange={setImageUrl}
        />
        <Input
          type="number"
          value={price}
          placeholder="Price"
          onChange={setPrice}
        />
        <Input
          type="text"
          value={description}
          placeholder="Add Destination........."
          onChange={setDescription}
        />
        <div className={styles.buttonWraperInput}>
          <Button onClick={onClickHandler} text="Create" />
        </div>
      </div>
    </div>
  );
};

export default insertTrip;
