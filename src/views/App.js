// import "../styles/global.scss";
import MyComponents from "./Example/MyComponents";
import "./App.scss";
import ListTodo from "./TodoApp/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import About from "./Example/About";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {/* <ListTodo /> */}
        {/* <Home /> */}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggableY
          pauseOnHover
          theme="dark"
        />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
