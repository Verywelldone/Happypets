import React from "react"
import Axios from "axios"




class LogOut extends React.Component {
  constructor(props) {
    super(props);

    this.testRedirect = this.testRedirect.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // testRedirect(){
  //     const path ="/";
  //     this.props.history.push(path);  
  //   }


  logOut() {
    Axios.patch("http://localhost:3001/currentSession", {
      "name": "",
      "email": ""
    })

    //  this.testRedirect();
  }

  render() {
    return this.logOut;
  }
}
export default LogOut