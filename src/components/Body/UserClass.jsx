import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name +" class constructor");
  }

  componentDidMount(){
    console.log(this.props.name +"component did mount")
  }
  render() {
    const { name, location } = this.props;

    console.log( name  + " class render");

    return (
      <div>
        This is about page user class
        <p> {name}</p>
        <p>{location}</p>
        <p>Count for user: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default UserClass;
