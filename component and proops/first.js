import React from "react";

function Date(date) {
    return date.toLocaleDateString();
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        
          <div className="UserInfo-name">
            {props.author.name}
          </div>
    
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {Date(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
     
    }
  };
  export default Date;
  
    