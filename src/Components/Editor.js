import React from "react";
import "./Editor.css";
import { useState } from "react";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Editor = ({heading,icon,color,value,onChange}) => {
  const handlechange=(editor,data,value)=>{
        onChange(value);
  }
  const[open,setopen]=useState(true)
  return (
    
    <div style={{flexBasis:"0",display:"flex",flexDirection:"column",padding:"0 8px 8px",height:"50vh",flexGrow:open?"1":"0"}}>
      <div className="Top" style={{backgroundColor:"#060606"}}>
        <div className="left" style={{backgroundColor:"#1d1e22" ,color:"#AAAEBC"}}>
          <p className="my-0"
            style={{
              backgroundColor: color,
              color:"#000",
              width: "20px",
              height:"20px",
              borderRadius:"5px",
              paddingBottom:"2px",
              marginRight:"5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </p>
          <p style={{marginRight:"10px"}} >{heading}</p>
         
        </div>
        
        <div className="right">
        <div style={{color:"#AAAEBC",cursor:"pointer",fontSize:"3px",alignSelf:"center"}}> <CloseFullscreenIcon 
        onClick={()=>setopen(prevState=>!prevState)}
        /></div>
        </div>
      </div>
      <Controlled className="controlled-editor"
      value={value}
      onBeforeChange={handlechange}
      options={{
        theme:"material",
        lineNumbers:true
      }}/>
    </div>

  );
};

export default Editor;
