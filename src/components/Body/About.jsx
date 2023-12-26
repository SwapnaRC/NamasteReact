import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("parent constructor")
  }
  componentDidMount(){
    console.log("parent component did mount")
  }
  render() {
    console.log("parent render")
    return (
      <div>
        This is about us
        <UserClass name={"child1"} location={"Bangalore"} />
        <UserClass name={"child2"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
