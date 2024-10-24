import { useState } from "react";
import styles from "../styles/header.module.css";
import Footer from "./Footer";
export default function Header({ insert, setInsert }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function getDate() {
    const today = new Date();
    const month = months[today.getMonth()];
    const date = today.getDate();
    const day = days[today.getDay()];
    return `${day}, ${month} ${date}`;
  }
  const [currentDate, setCurrentDate] = useState(getDate());
  function handleClick() {
    const input = insert ? false : true;
    setInsert(input);
  }
  // const buttonText = insert ? "+" : "x";
  const buttonClass = insert ? styles.show : styles.hide;
  return (
    <div className={styles.header}>
      <span className={styles.headerText}>Todo List</span>
      <button
        className={`${styles.addButton} ${buttonClass}`}
        onClick={handleClick}
      >
        +
      </button>
      <br />
      <span className={styles.date}>{currentDate}</span>
    </div>
  );
}
