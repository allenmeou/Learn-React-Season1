import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "todo-1",
        title: "Doing homework ",
      },
      {
        id: "todo-2",
        title: "Making video ",
      },
      {
        id: "todo-3",
        title: "Watch JAV ",
      },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("successfully");
  };

  render() {
    let { listTodos } = this.state;

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
                        <span>
                          {index + 1} - {todo.title}
                        </span>
                      </div>
                      <div className="btn-add-container">
                        <button className="btn-add-todo">Edit</button>
                        <button className="btn-add-todo">Done</button>
                        <button className="btn-add-todo">Delete</button>
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

export default ListTodo;
