import React from "react";

function Note(props){

    return <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <label>Added at:{new Date().toLocaleString()}</label>
            </div>
}

export default Note;