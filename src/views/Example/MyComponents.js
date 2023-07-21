import React from "react";
import SearchJavIdol from "./SearchJavIdol";

class MyComponents extends React.Component {
  state = {
    firstName: "",

    image: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    if (this.state.firstName) {
      this.setState({
        image:
          "https://scanlover.com/assets/images/11110-UKZH0An1YAonmvWl.jpeg",
      });
    }
    // console.log(this.state);
  };
  handleClickInput = (event) => {
    console.log(">>> Tên Idol: ", this.state);
  };
  // RENDER
  render() {
    // console.log(">>> call render :", this.state);
    return (
      <div>
        <img
          src="https://image.lag.vn/upload/news/20/03/26/90469413_226394772064889_3014365476064067584_o_XBPW.jpg"
          alt=""
          className="App-logo "
        />
        <h2>Nhập tên IDOL </h2>
        <form onSubmit={this.handleSubmitForm}>
          <label htmlFor="fName">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br /> <br />
          <input
            onClick={(event) => this.handleClickInput(event)}
            type="submit"
            value="Tìm kiếm"
          />
        </form>
        <>
          <img className="image-logo-idol" src={this.state.image} alt="" />
        </>

        <div>
          <p>Jav Search Url </p>
          <SearchJavIdol name={"one"} />
          <SearchJavIdol name={"two"} />
          <SearchJavIdol name={"three"} />
        </div>
      </div>
    );
  }
}

export default MyComponents;
