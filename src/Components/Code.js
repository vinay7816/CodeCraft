import React from 'react';
import Editor from './Editor';
import { useContext } from 'react';
import { DataContext } from '../Context/Dataprovider';
import Result from './Result';

const Code = () => {
  const{  html,sethtml,css,setcss,js,setjs}=useContext(DataContext)
  return (
   
    <div style={{display:"flex",backgroundColor:"#060606",height:"55vh"}}>
      <Editor heading="Html" icon="/" color="#FF3C41" value={html} onChange={sethtml}/>
      <Editor heading="CSS" icon="*" color="#0EBEFF" value={css} onChange={setcss}/>
      <Editor heading="JS" icon="()" color="#FCD000" value={js} onChange={setjs}/>
      </div>

  
    
  );
}

export default Code;
