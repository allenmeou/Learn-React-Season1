import React from "react";

class MyComponents extends React.Component {
  // STATE
  state = {
    name: "Minamo",
    chanel: "Minamo Jav chanel",
    title: "",
    image: "",
  };

  // EVENT
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    this.setState({
      chanel: "JAV Chanel",
      title: "Cảm ơn vì đăng ký , tặng bạn tấm hình để ngắm nhé ^^",
      image: "https://scanlover.com/assets/images/11110-UKZH0An1YAonmvWl.jpeg",
    });
  };

  // RENDER
  render() {
    console.log(">>> call render :", this.state);
    return (
      <div>
        <div>
          <h1>My Favorite JAV</h1>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChangeName(event)}
          />
          <h2> My name is : {this.state.name}</h2>
        </div>
        <div>
          <h3>My Youtube Chanel : {this.state.chanel}</h3>
          <button onClick={() => this.handleClickButton()}>Đăng ký</button>
        </div>
        <div>
          <h4>{this.state.title}</h4>
          <img src={this.state.image} alt="" />
        </div>
      </div>
    );
  }
}

export default MyComponents;
