import { useState } from 'react';

export default function ToDoList() {
  // const [todos, setTodos] = useState(['Task1', 'Task2', 'Task3', 'Task4']);
  const [todos, setTodos] = useState([
    { taskId: 1, name: 'Task1' },
    { taskId: 2, name: 'Task2' },
    { taskId: 3, name: 'Task3' },
  ]);
  const [text, setText] = useState('');

  const onInputChange = (e) => {
    setText(e.target.value);
  };
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
      {/* 3rd way to access elements from an array **Mostly Used in programs is using map**/}
      <input placeholder="Enter Todo" value={text} onChange={onInputChange} />
      <button
        onClick={() => {
          // 1.solution one
          if (text.length > 3 && text.includes('Task')) {
            console.log([...todos, { name: text, taskId: todos.length + 1 }]);
            setTodos([...todos, { name: text, taskId: todos.length + 1 }]);
          }
          //2.solution two
          // const updatedTodos = [...todos];
          // updatedTodos.push({ name: text, taskId: todos.length + 1 });
          // console.log(updatedTodos);
          // setTodos(updatedTodos);
        }}
      >
        Add
      </button>
      {todos.map((todo) => {
        return <p key={todo.taskId}>{` ${todo.name}`}</p>;
      })}
    </div>
  );
}
