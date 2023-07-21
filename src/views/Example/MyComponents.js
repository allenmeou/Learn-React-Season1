import React from "react";

class MyComponents extends React.Component {
  state = {
    name: "meou",
    chanel: "meou chanel",
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

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
        </div>
      </div>
    );
  }
}

export default MyComponents;
