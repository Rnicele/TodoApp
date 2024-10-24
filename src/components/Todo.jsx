import { useState } from "react";
import styles from "../styles/todo.module.css";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
import Header from "./Header";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const [insert, setInsert] = useState(false);
  return (
    <div className={styles.todoCard}>
      <Header insert={insert} setInsert={setInsert} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      <hr className={styles.line} />
      <Form todos={todos} setTodos={setTodos} insert={insert} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
