function Second()
{ 
    let data= "Md.Nurul Haider "
    function apple()
    {
        data= "preter";
        alert(data);
    }
    return(
        <div className="First">  
            <h1> {data} </h1>
            <button onClick={apple}> Click Me </button>
            

        </div>
        
    )
}

export default Second;