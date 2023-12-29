import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount(){
    console.log(this.props.name +"component did mount")
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
