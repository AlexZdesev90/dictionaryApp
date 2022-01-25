import React from "react";
import Word from "./Word";

const AddList = (props) => {
    let array = props.array;
    return (
        <div>
            {array.map((element, idx) => {
               
                return <Word key={idx} words={element} idx={idx} />
            })}
            
             
            
            </div>
    )
}
  


export default AddList;
