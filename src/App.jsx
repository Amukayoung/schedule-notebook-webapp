import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Note from "../src/components/Note";
//import Chicken from "./components/Chicken";


function Chicken(Chicken){

    return <div className="chiko">
        <h3>{Chicken.name}</h3>
        <p>{Chicken.price}</p>
        <p>{Chicken.Telephone}</p>
        <img src={Chicken.merge}/>
    </div>
}

function App(){
    return<div>
        <Header/>
        <Note/>
        <Chicken 
            name="Banana Bar"
            price="20,000/=" 
            Telephone="0777184592"
            merge="https://images.squarespace-cdn.com/content/v1/592bb0003e00be0c6ce7c8af/1512549802379-A8IJM1JEUH58BODCD67G/shutterstock_249061474_SFW1000.jpg?format=500w" 
          />
         <Chicken 
            name="Thrones Lounge"
            price="30,000/=" 
            Telephone="07771845267"
            merge="https://images.squarespace-cdn.com/content/v1/592bb0003e00be0c6ce7c8af/1512549802379-A8IJM1JEUH58BODCD67G/shutterstock_249061474_SFW1000.jpg?format=500w" 
          />
           <Chicken 
            name="Karibu Bar & lounge"
            price="18,000/=" 
            Telephone="0777184592"
            merge="https://images.squarespace-cdn.com/content/v1/592bb0003e00be0c6ce7c8af/1512549802379-A8IJM1JEUH58BODCD67G/shutterstock_249061474_SFW1000.jpg?format=500w" 
          />
        <Footer/>
    </div>
}

export default App;