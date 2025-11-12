import React from "react";

function MyGroup({ fcn, buttonLabel, text, link }) {
  return (
    <div className="my-group">
      <button onClick={fcn}>{buttonLabel}</button>
      <div className="my-group-text">
        <p>{text}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            (Check Transaction)
          </a>
        )}
      </div>
    </div>
  );
}

export default MyGroup;