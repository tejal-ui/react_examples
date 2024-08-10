import { useState } from 'react';

export default function ToDoList() {
  const [todos, setTodos] = useState(['Task1', 'Task2', 'Task3', 'Task4']);

  // const getTodos = () => {
  //   const todoElements = [];
  //   todos.forEach((todo) => {
  //     todoElements.push(<p>{todo}</p>);
  //   });
  //   return todoElements;
  // };

  return (
    <div>
      <p>Todo List</p>
      {/* first way to access elements from an array */}
      {/* {getTodos()} */}
      {/* 2nd way to access elemnts from an array */}
      {/* <p>{todos[0]}</p>
      <p>{todos[1]}</p>
       */}
      {/* 3rd way to access elements from an array **Mostly Used in programs**/}
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}
