import React from "react";

class AddComponents extends React.Component {
  state = {
    titleJob: "",
    salaryJob: "",
  };
  handleChangeTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleChangeSalaryJob = (event) => {
    this.setState({
      salaryJob: event.target.value,
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
  };
  handleClickInput = (event) => {
    console.log(">>> Tên Idol: ", this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <br />
        <label htmlFor="fName">Job title:</label> <br />
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />{" "}
        <br />
        <label htmlFor="fName">Salary :</label> <br />
        <input
          type="text"
          value={this.state.salaryJob}
          onChange={(event) => this.handleChangeSalaryJob(event)}
        />
        <br /> <br />
        <input
          onClick={(event) => this.handleClickInput(event)}
          type="submit"
          value="Tìm kiếm"
        />
      </form>
    );
  }
}

export default AddComponents;
