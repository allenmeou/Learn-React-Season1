import { useState } from "react";

const AddToDo = () => {
  // STATE
  const [newTodo, setNewTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    {
      id: "todo-1",
      value: "Doing HomeWork",
    },
    {
      id: "todo-2",
      value: "Learning React",
    },
  ]);
  // EVENT
  const handleChangeTask = (event) => {
    const inputValue = event.target.value;
    setNewTodo(inputValue);
  };

  const handleAddTask = () => {
    let todo = {
      id: Math.floor(Math.random() * 100),
      value: newTodo,
    };
    // check value input
    if (!newTodo) {
      alert("chua nhap");
      return;
    }
    setListTodo([...listTodo, todo]);
    setNewTodo("");
  };

  const handleDeleteTask = (todo) => {
    // lọc ra những thằng có id khác với id người dùng nhấn
    let filterTodoId = listTodo.filter((item) => item.id !== todo.id);

    setListTodo(filterTodoId);
  };

  // RENDER
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: 20 }}>
        <input
          value={newTodo}
          type="text"
          onChange={(event) => handleChangeTask(event)}
        />
        <button onClick={() => handleAddTask()}>Add todo </button>
      </div>
      <div>
        {listTodo.map((todo, index) => {
          return (
            <div key={index} style={{ marginBottom: 10 }}>
              {index + 1} - {todo.value}
              <button onClick={() => handleDeleteTask(todo)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddToDo;
