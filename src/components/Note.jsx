import React from "react";

function Note(props){

    function clickHandler(){
        props.addDelete(props.id)
    }

    return <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <label>Added at:{new Date().toLocaleString()}</label><span><button onClick={clickHandler}>DELETE</button></span>
            </div>
}

export default Note;