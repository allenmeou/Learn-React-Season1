import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
// import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "todo-1",
        title: "Doing homework ",
      },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("successfully");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete Task");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: "",
      });

      toast.success("Save Task");

      return;
    }

    // edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditToDo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <div className="list-todo-container">
        <div className="logo">
          <img
            className="img-logo"
            src="https://mof.com.vn/wp-content/uploads/tong-hop-top-10-dien-vien-jav-dep-nhat-0.jpg"
            alt=""
          />
        </div>
        <h2>JAV Todo </h2>

        <AddTodo addNewTodo={this.addNewTodo} />

        <div className="filter-todo">
          <h3 className="todo-border-bottom filter-todo-item">All Task </h3>
          <h3 className="filter-todo-item">Pending </h3>
          <h3 className="filter-todo-item">Completed </h3>
        </div>

        <div className="list-todo-content">
          <div className="todo-child">
            <div className="todo-child-content">
              {listTodos &&
                listTodos.length > 0 &&
                listTodos.map((todo, index) => {
                  return (
                    <div key={index} className="list-todo-item">
                      <div className="todo-title-container">
                        {isEmptyObj === true ? (
                          <span>
                            {index + 1}. {todo.title}
                          </span>
                        ) : (
                          <>
                            {editTodo.id === todo.id ? (
                              <span className="edit-todo-container">
                                {index + 1}.{" "}
                                <input
                                  type="text"
                                  defaultValue={editTodo.title}
                                  onChange={(event) => {
                                    this.handleOnChangeEditToDo(event);
                                  }}
                                />
                              </span>
                            ) : (
                              <span>
                                {index + 1}. {todo.title}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      <div className="btn-add-container">
                        <button
                          className="btn-add-todo"
                          onClick={() => this.handleEditTodo(todo)}
                        >
                          {isEmptyObj === false && editTodo.id === todo.id
                            ? "Save"
                            : "Edit"}
                        </button>
                        <button
                          className="btn-add-todo"
                          onClick={() => {
                            this.handleDeleteTodo(todo);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default ListTodo;
export default ListTodo;
