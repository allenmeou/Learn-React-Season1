import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  handleButtonBackUser = () => {
    this.props.history.push("/user");
  };

  render() {
    let { user } = this.state;

    console.log(">>> check props:", this.props);

    // check Object empty
    let isEmptyObj = Object.keys(user).length === 0;

    console.log(user);

    return (
      <>
        {/* <div>Detail User with id : {this.props.match.params.id}</div> */}
        {isEmptyObj === false && (
          <div style={{ margin: 20, textAlign: "center" }}>
            <div style={{ marginBottom: 10 }}>
              User name :{user.first_name} {user.last_name}
            </div>
            <div style={{ marginBottom: 10 }}>Email : {user.email}</div>
            <div>
              <img style={{ margin: "0 auto" }} src={user.avatar} alt="" />
            </div>
            <button
              onClick={() => this.handleButtonBackUser()}
              style={{
                marginTop: 30,
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
              }}
            >
              Back{" "}
            </button>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
