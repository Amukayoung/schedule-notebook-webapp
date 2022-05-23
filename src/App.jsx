import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Note from "../src/components/Note";
import Schedule from "../src/components/Schedule";

//console.log(Schedule);

function App(){
    return<div>
        <Header/>
        {Schedule.map((scheduleItem)=><Note 
        key={scheduleItem.key}
        title={scheduleItem.title}
        content={scheduleItem.content} 

        />)}
        <Footer/>
    </div>
}

export default App;