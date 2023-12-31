import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("timer in class component");
    // }, 1000);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component unmount");
  }
  render() {
    const { name, location } = this.props;
    return (
      <div>
        <p> {name}</p>
        <p>{location}</p>
      </div>
    );
  }
}

export default UserClass;
