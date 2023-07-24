import React from "react";
import SearchJavIdol from "./SearchJavIdol";
import AddComponents from "./AddComponents";

class MyComponents extends React.Component {
  state = {
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

  addNewJobs = (job) => {
    console.log(">>> check job from paren :", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> run diupdate :",
      "prev state :",
      prevState,
      "current state :",
      this.state
    );
  }

  componentDidMount = () => {
    console.log(">>> componentDidMount ");
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
        <h2> JAV PROGRAMMING </h2>
        <AddComponents addNewJobs={this.addNewJobs} />

        <>
          <img className="image-logo-idol" src={this.state.image} alt="" />
        </>

        <div>
          <SearchJavIdol
            arrJobs={this.state.arrJobs}
            deleteAJob={this.deleteAJob}
          />
        </div>
      </div>
    );
  }
}

export default MyComponents;
