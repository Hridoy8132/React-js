import {useState} from "react";

function Third()
{ 
    const [data,setData]=useState("Nurul")
    
    function updateData()
    {
        setData("Haider")
    }
    return(
        <div className="App">  
            <h1> {data} </h1>
            <button onClick={updateData}> Update Me </button>
            

        </div>
        
    )
}

export default Third;