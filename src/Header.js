import React from "react";
import { useState } from "react";
const Header = () => {
    const [visibility,setVisibility] = useState(false);
   const handleClick= ()=>{
        setVisibility((visibility) => !visibility);
    }
    return (
        <div>
        <header>
            <h1>To Do List</h1>
        </header>
        <button onClick={handleClick}>Click Me</button>
         {visibility && <span>Here Iam</span>}
        </div>
    )
}

export default Header;