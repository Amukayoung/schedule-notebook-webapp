import React from "react";

function Note(){

    return <div className="note">
                <h1>Learning raeact</h1>
                <p>Watching and practicing with the Complete full stack web developer by Angela Yu</p>
                <label>Added at:{new Date().toLocaleString()}</label>
            </div>
}

export default Note;