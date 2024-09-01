import React from "react";
function Compare()
{
    const name1="Krish";
    const name2="Krish";
    const object1={name:"Krish"};
   const object2={name:"Krish"};
   alert(object1===object2);
   alert(name1===name2);
   alert(object1===name1);
}
const Nikil = ()=>{
    return (
        <div>
            <h1>Let we see the output of javascript</h1>
            <button onClick={Compare}>CY1</button>
        </div>
    );
};
export default Nikil;
