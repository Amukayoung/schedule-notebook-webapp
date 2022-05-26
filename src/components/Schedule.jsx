import React, { useState } from "react";

function Schedule(props) {

  const [inputText,setInputText] = useState({
    title:"",
    content:""
  });

  function addInputText(event) {
    setInputText(prevValue => {
      return {
      ...prevValue,
      [event.target.name]:event.target.value
    };
    });
  }

  function submitInputText(event){
    props.addInputSchedule(inputText)
    setInputText({
    title:"",
    content:""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={addInputText}
          name="title" 
          value={inputText.title} 
          placeholder="Title"
          
        /> 
        <textarea 
          onChange={addInputText} 
          name="content" 
          value={inputText.content} 
          placeholder="Take a note..." 
          rows="3"
         />
        <button onClick={submitInputText} >Add</button>
      </form>
    </div>
  );
}

export default Schedule;