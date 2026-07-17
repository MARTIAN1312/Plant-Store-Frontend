import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import { useState } from "react";
import '../pages/plants.css'
export default function Rcslider(){
    const [range,setrange]= useState([11,33])

    return(
        <>
         <div className="slider">
            <Slider range min={11} max={33} value={range} onChange={setrange} />
        </div>
        
        <div style={{display:'flex', justifyContent:'center',margin:' 0px',gap:'120px',}}>
            <p style={{margin:'20px'}}>${range[0]}</p>
            <p style={{margin:'20px'}}>${range[1]}</p>
        </div>
        </>
    )
}