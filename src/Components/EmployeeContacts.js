import React from "react";

function EmployeeContacts(props) {
  return (
    <div>
      <div className="container" style={StyleEmployeeDetail}>
        <div style={styleContent}>
          <h3 style={stylep}>{props.detail.contact}</h3>
          <span style={stylep}>{props.detail.number}</span>
        </div>
      </div>
    </div>
  );
}
const styleContent = {
  margin: "0 20px",
};
const stylep = {
  padding: "0",
  margin: "0",
};

const StyleEmployeeDetail = {
  display: "flex",
  justifyContent: "left",
  alignItem: "center",
  backgroundColor: "#ffffff",
  width: "100%",
  padding: "10px 0",
  height: "50px",
  margin: "5px 0",
};

export default EmployeeContacts;
