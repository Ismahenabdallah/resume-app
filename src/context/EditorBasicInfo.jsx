/* eslint-disable array-callback-return */
import React, { forwardRef, useEffect, useRef } from 'react'

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box } from '@mui/material';
const EditorBasicInfo = forwardRef((props, ref) => {
  const containerRef = useRef();
  const getbasicinfo = useSelector((state) => state.Reducer.BasicInfo);
  const getwork = useSelector((state) => state.Reducer.workexp);
 // const obj = JSON.parse(JSON.stringify(getbasicinfo)) 
  
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
<div style={{ gap:'4%',display: 'flex ' }}>
<Box sx={{ width: '70%' }} style={{ marginLeft: '3%', display: 'block ' }}>
 <img src={getbasicinfo.avatar} alt="" /> 
      
          {getbasicinfo.namel || getbasicinfo.profession ? <div className="background">
            <div >
              <h3 style={{ paddingTop: '9vh' }}> {getbasicinfo.namel}</h3>
              <h4 style={{ marginTop: '-3vh' }}>{getbasicinfo.profession}</h4>

            </div>


          </div> : ''}





        </Box>
        <Box >
          <div className='two'  >
            {getbasicinfo.description ? <div className='two-1' style={{ display: 'block ' }}>
              <h3>Profil Personnel
              </h3>
              <p>{getbasicinfo.description}</p>


            </div> : ''}
          </div>

        </Box>
</div>
       
        <Box sx={{ width: '100%' }} style={{ marginLeft: '3%' , padding: 0, display: 'flex', gap:'5%' }}>
        <> {getbasicinfo.adresse || getbasicinfo.phone ||getbasicinfo.email ? <div className='three'>
            <h3>Comment Me Joindre</h3>
            {getbasicinfo.phone ?  <div style={{ display: '' }}><h4 style={{ marginBottom: '-3vh' }}><em>Phone : </em></h4>
              <p>{getbasicinfo.phone}</p></div> : ""}
           {getbasicinfo.email ?<div style={{ display: '' }}><h4 style={{ marginBottom: '-3vh' }}><em>E-mail  : </em></h4>
              <p>{getbasicinfo.email}</p></div> :''}
              {getbasicinfo.adresse ?<div style={{ display: '' }}><h4 style={{ marginBottom: '-3vh' }}><em>Adresse : </em></h4>
              <p>{getbasicinfo.adresse}</p></div> :''}
              

          </div> : ""}</>
        <>{getbasicinfo.GithubLink ||getbasicinfo.LinkedinLink || getbasicinfo.portfolio ? <div className='three'>
        <h3>Compte Professionnnel</h3>
        {getbasicinfo.LinkedinLink  ? <div style={{ display: '' }}><h4 style={{ marginBottom: '1vh' }}><em>Linkedin Link
 : </em></h4> <a href={getbasicinfo.LinkedinLink }>{getbasicinfo.LinkedinLink }</a>
              </div>:''}
              {getbasicinfo.GithubLink  ? <div style={{ display: '' }}><h4 style={{ marginBottom: '1vh' }}><em>Github Link
 : </em></h4> <a href={getbasicinfo.GithubLink }>{getbasicinfo.GithubLink }</a>
              </div>:''}
              {getbasicinfo.portfolio ? <div style={{ display: '' }}><h4 style={{ marginBottom: '1vh' }}><em>Portfolio Link
 : </em></h4> <a href={getbasicinfo.portfolio }>{getbasicinfo.portfolio }</a>
              </div>:''}
        </div>  :""}
        </>  
        </Box>
       <div>
        
       {
          getwork.map((form) => {
           
              <p key={form.company}>
              {form.location}
              </p>
            
          })
        }
       </div>
      </div>





    </Container>
  )
})
const Container = styled.div`
.container{
  
--color: #239ce2;








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
  height:25vh;
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
      margin-top:8vh;
    }
    
    p{
      color:gray;
    }
  }
 
}
.three{
  h3{
    color:var(--color);
  flex-wrap: nowrap !important;}

  p{
    color:gray;
  }
  a{
    color:gray !important;
    text-decoration:none !important;
  }
  
}
}
`;


export default EditorBasicInfo;
