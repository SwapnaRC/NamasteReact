import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {}
    };
  }
  async componentDidMount(){
    // https://api.github.com/users/SwapnaRC 
    const data=  await fetch("https://api.github.com/users/SwapnaRC");
    console.log(data, 'data')
    const abtUserData = await data.json();
    console.log(abtUserData, 'abtUserData')
    this.setState({ userData: abtUserData})
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  render() {
    const {avatar_url, name, location  } = this.state.userData
    return (
      <div>
        This is about us
        <UserClass name={name} location={location} />
        <img src={avatar_url} style={{height: "150px", width: "150px"}} />
      </div>
    );
  }
}

export default About;
