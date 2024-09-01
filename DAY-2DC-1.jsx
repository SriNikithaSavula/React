import React from 'react';
const Car=() =>{
  return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'lightskyblue'}}>
      <h1 >Car and Location Info</h1>
      <p style={{textAlign:'center',backgroundColor:'Red',padding:'100px',fontFamily:'monospace',fontSize:'30px'}} >Thar Model <br></br>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg" style={{ width:'500px',height:'300px'}}></img>
      </p>
    </div>
  );
};
export default Car;
