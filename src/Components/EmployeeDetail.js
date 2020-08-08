import React from "react";
import EmployeeContacts from "./EmployeeContacts";

export default function EmployeeDetail(props) {
  return (
    <div>
      {props.detail.map((detail) => (
        <EmployeeContacts detail={detail} />
      ))}
    </div>
  );
}
