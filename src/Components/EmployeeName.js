import React from "react";
import person from "./person-two.jpg"
function EmployeeName(){
    return(
        <div>
            <div className="container" style={StyleEmployeeName}> 
                <div>
                <img style={StyleEmployeeImage}src = {person} alt="person Image"/> 
                </div>
                <div style={styleContent}>
                    <h1 style={stylep}>Julie Taylor</h1>
                    <p style={stylep}>VP of Marketing</p>
                </div>
            </div>

         
        </div>
        
            
        
    )
}
const styleContent={
    margin:"0 10px",

}
const stylep={
    padding:"0 ",
    margin:"0",
}


const StyleEmployeeImage={

     width:"100px",
     height:"100px",
     borderRadius:"100%",
     margin:"0 0 0 10px",
};
const StyleEmployeeName={
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
    backgroundColor:"#ffffff",
    width:"100%",
    padding:"10px 0",
    height:"100px",

   
}

export default EmployeeName;