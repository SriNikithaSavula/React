import React from "react";
const Message=()=> {
    return (
        <div>
            <h1 style={{color:'red'}}>Inline Style in JSX Example.</h1>
            <div style={{background:'white',color:'black',padding:'10px',border:'1px solid blue.',borderRadius:'5px'}}>
            <p style={{color:'black',fontSize:'16px'}}>This is a paragraph with inline styles applied.</p></div>
        </div>
    );
};
export default Message;
