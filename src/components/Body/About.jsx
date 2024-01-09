import React from "react";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

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
    const abtUserData = await data.json();
    this.setState({ userData: abtUserData})
  }

  render() {
    const {avatar_url, name, location  } = this.state.userData
    return (
      <div>
        This is about us 
        <UserContext.Consumer>
          {(LoggedInUserName) => {
            <h1>{LoggedInUserName}</h1>
          }}
        </UserContext.Consumer>
        <UserClass name={name} location={location} />
        <img src={avatar_url} style={{height: "150px", width: "150px"}} />
      </div>
    );
  }
}

export default About;
