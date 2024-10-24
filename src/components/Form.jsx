import { useState } from "react";
import styles from "../styles/form.module.css";
export default function Form({ todos, setTodos, insert }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  const showHide = insert ? styles.hide : styles.show;
  return (
    <form onSubmit={handleSubmit} className={`${styles.todoform} ${showHide}`}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          className={styles.modernInput}
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
