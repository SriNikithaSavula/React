import React from 'react';
const instyle={
      backgroundColor:'lightpink',
      border:'3px solid black',
      margin:'200px',
    height:'300px',
    width:'400px'
    
 };
class Weather extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            location:'London',
            Temperature:'20°C',
            Condition:'cool'
        }

    }
    Click = (event) => {
        event.preventDefault(); 
        
        const Loc = document.getElementById('loc');
        const Locval = Loc.value;
        
        this.setState((pre)=>({location:pre.location==='London'?Locval :'London'}))
                
    }
    
   
    render()
    {
        return(
            <center><form onSubmit={this.Click} style={instyle}>
            <h1>WEATHER APPLICATION</h1>
            <input type="text" placeholder="Enter new Location" id="loc" required/>
            <button type='submit'>Update Location</button>
            <h4>Current Weather:{this.state.location}</h4>
            <h4>Temperture:{this.state.Temperature}</h4>
            <h4>Condition:{this.state.Condition}</h4>
            </form></center>
        )
    }
}
export default Weather;
