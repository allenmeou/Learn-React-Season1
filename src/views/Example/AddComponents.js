import React from "react";

class AddComponents extends React.Component {
  state = {
    title: "",
    salaryJob: "",
  };
  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalaryJob = (event) => {
    this.setState({
      salaryJob: event.target.value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    if (!this.state.title || !this.state.salaryJob) {
      alert("messing required params");
      return;
    }

    this.props.addNewJobs({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salaryJob,
    });

    this.setState({
      title: "",
      salaryJob: "",
    });
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
          value={this.state.title}
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
          value="Submit"
        />
      </form>
    );
  }
}

export default AddComponents;
