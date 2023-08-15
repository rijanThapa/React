import React, { useEffect, useState } from 'react';
import './darkMode.css';


function DarkMode(props) { 
   
    const [theme, setTheme] = useState("lightTheme");

    const toggleTheme = () => {
        
    
        if (theme === "darkTheme") {
            setTheme("lightTheme");
        } else {
            setTheme("darkTheme");
        }
    };

    useEffect(() => {
      
        document.body.className = theme;
    }, [theme]);
    return (
    
        <div>
       <h1>Heading</h1>
       <p>Dark modev change into light mode and vice versa </p>
            <button className="change" onClick={toggleTheme}>Change</button>
        
            </div>
    );
   

}
export default DarkMode;