import React from 'react';
import Header from "./Components/Header"
import './App.css';
import EmployeeName from './Components/EmployeeName';
import EmployeeDetail from './Components/EmployeeDetail';
function App() {
  return (
    <div className="App" style={styleApp}>
     <Header/>
     <EmployeeName/>
     <EmployeeDetail/>

    </div>
  );
}
const styleApp={
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-start",
  width:"30%",
  alignItem:"left",
  backgroundColor:"#FF9EAB",
  margin:"30px 0 0 20px",
  padding: "0 2px"
};

export default App;
