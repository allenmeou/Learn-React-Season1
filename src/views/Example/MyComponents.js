import React from "react";

class MyComponents extends React.Component {
  // STATE
  state = {
    name: "meou",
    chanel: "meou chanel",
  };
  // EVENT
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    console.log("clicked");
    alert("Đã Đăng Ký");
  };
  // RENDER
  render() {
    return (
      <div>
        <div>
          <p>My Components</p>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChangeName(event)}
          />
          <h1> My name is : {this.state.name}</h1>
        </div>
        <div>
          <h2>My Youtube Chanel : {this.state.chanel}</h2>
          <button onClick={() => this.handleClickButton()}>Đăng ký</button>
        </div>
      </div>
    );
  }
}

export default MyComponents;
