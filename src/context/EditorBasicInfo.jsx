/* eslint-disable array-callback-return */
import React, { forwardRef, useEffect, useRef } from 'react'
import img from "./img-1.jpg"
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import { Box } from '@mui/material';
const EditorBasicInfo = forwardRef((props, ref) => {
  const containerRef = useRef();
    const getbasicinfo = useSelector((state)=> state.Reducer.BasicInfo);
  
    const obj = JSON.parse(JSON.stringify(getbasicinfo))
  /* 
   *****get data fron localstorage***** 
    
   // const [data, setdata] = useState ( () => {
   //  const savedItem = localStorage.getItem("form");
   // const parsedItem = JSON.parse(savedItem)
   // return parsedItem || "";
   // });
 <h1>{data.namel}</h1>
 
 */  
 useEffect(() => {
  const container = containerRef.current;
  if (!props.activeColor || !container) return;

  container.style.setProperty("--color", props.activeColor);

}, [props.activeColor]);
  return (
   <Container ref={ref} >
    <div className='container' ref={containerRef}>
     
    <Box  sx={{ width: '70%' }}  style={{ marginLeft:'10%' , display:'block '}}>
<img src={img} alt=""/>
{obj.namel&&obj.profession ? <div className="background">
  <div >
  <h3 style={{ paddingTop:'9vh' }}> {obj.namel?obj.namel:''}</h3>
  <h4  style={{ marginTop:'-3vh' }}>{obj.profession}</h4>

  </div>
 

</div>:''}


    
    
    
    </Box>
    <Box >
      <div className='two'  >
      {obj.description? <div className='two-1' style={{  display:'block '}}>
        <h3>Profission </h3>
        <p>{obj.description}</p>
      </div>:''}
      </div>
      
    </Box>
    </div>
    

 
  
   
   </Container>
  )
})
const Container = styled.div`
.container{
  
--color: #239ce2;
gap:10%;
display:flex;




img{
  margin-left:10vh;
  width:30vh !important;
  height:30vh !important;
  border-radius:50% !important  ;
  z-index=-1;
}
.background{
  
  margin-top:-14vh;
  width:50vh;
  height:26vh;
  border-radius:8vh !important;
  background-color:var(--color);
 &>div{
  h3, h4{
    text-align:center;

    
  }
  h4{
    color:white;
  }
    
   
  
  }
  

}
.two{
  .two-1{
    h3{
      color:var(--color);
    }
    p{
      color:gray;
    }
  }
 
}

}
`;


export default EditorBasicInfo;
