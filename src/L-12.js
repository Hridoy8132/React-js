// import {useState} from "react";

// function Third()
// { 
//     const [data,setData]=useState("Nurul")
    
//     function updateData()
//     {
//         setData("Haider")
//     }
//     return(
//         <div className="App">  
//             <h1> {data} </h1>
//             <button onClick={updateData}> Update Me </button>
            

//         </div>
        
//     )
// }

// export default Third;


// Lecture 12 State with Class component:

import React,{Component} from "react";

class Third extends Component {
    constructor()
    {
        super();
        this.state={
            data:"Hridoy"
        }

    }
    apple()
    {
       this.setState({data:"Khan" }) 
    }
    render()
    {
        return(
            <div className="App">
                <h1> { this.state.data}</h1>
                <button onClick={()=>this.apple()}> Update Data </button>
                
            </div>

        );
    }

}

export default Third;

// same code for updating h1 tag when I click this button using state with class component.