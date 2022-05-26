import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Note from "../src/components/Note";
import Schedule from "../src/components/Schedule";

//console.log(Schedule);

function App(){

    const [submittedSchedule,setSubmittedScedule]= useState([]);

    function addInputTextFromSchedule(submittedText){

        //console.log(inputText);
        setSubmittedScedule(prevText => {
           return [...prevText, submittedText];
        });

    }
  function onDelete(id){
    setSubmittedScedule(prevText => {
        return prevText.filter((submittedItems, index ) => {
            return index !== id;
        });  
    });
  }

    return<div>
        <Header/>
        <Schedule
            addInputSchedule={addInputTextFromSchedule}
        />

        {submittedSchedule.map((submittedItems,index)=> {
            return <Note
                        key={index}
                        id={index}
                        title={submittedItems.title}
                        content={submittedItems.content}
                        addDelete={onDelete}
                    />

        })};
        
        <Footer/>
    </div>
}

export default App;