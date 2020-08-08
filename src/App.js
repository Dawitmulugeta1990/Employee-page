import React, { Component } from "react";
import Header from "./Components/Header";
import "./App.css";
import EmployeeName from "./Components/EmployeeName";
import EmployeeDetail from "./Components/EmployeeDetail";

class App extends Component {
  state = {
    detail: [
      {
        contact: "Call Office",
        number: 761_000_0002,
      },
      {
        contact: "Call Mobile",
        number: 617_000_0002,
      },
      {
        contact: "SMS",
        number: 617_000_0002,
      },
      {
        contact: "Email",
        number: "david@gmail.com",
      },
    ],
  };
  render() {
    return (
      <div className="App" style={styleApp}>
        <Header />
        <EmployeeName />
        <EmployeeDetail detail={this.state.detail} />
      </div>
    );
  }
}

const styleApp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "30%",
  alignItem: "left",
  backgroundColor: "#FF9EAB",
  margin: "30px 0 0 20px",
  padding: "0 2px",
};

export default App;
