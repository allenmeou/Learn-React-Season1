import React from "react";
import SearchJavIdol from "./SearchJavIdol";

class MyComponents extends React.Component {
  state = {
    firstName: "",
    age: "",
    image: "",

    arrJobs: [
      {
        id: "job-1",
        title: "Dev JAV",
        salary: "500",
      },
      {
        id: "job-2",
        title: "Tester JAV",
        salary: "400",
      },
      {
        id: "job-3",
        title: "Project manager JAV",
        salary: "1000",
      },
    ],
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeAge = (event) => {
    this.setState({
      age: event.target.value,
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
          src="https://mof.com.vn/wp-content/uploads/tong-hop-top-10-dien-vien-jav-dep-nhat-0.jpg"
          alt=""
          className="App-logo "
        />
        <h2> JAV PROGRAMING </h2>
        <form onSubmit={this.handleSubmitForm}>
          <br />
          <label htmlFor="fName">First name:</label> <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />{" "}
          <br />
          <label htmlFor="fName">Age :</label> <br />
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.handleChangeAge(event)}
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
          <SearchJavIdol
            name={this.state.firstName}
            age={this.state.age}
            address={"Bình Dương"}
            arrJobs={this.state.arrJobs}
          />
        </div>
      </div>
    );
  }
}

export default MyComponents;
