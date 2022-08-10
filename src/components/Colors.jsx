import React , { useRef, useState } from 'react'
import styled from 'styled-components';
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import EditorBasicInfo from '../context/EditorBasicInfo';
import { useSelector } from 'react-redux';
export default function Colors() {
    const getbasicinfo = useSelector((state)=> state.Reducer.BasicInfo);
    const reducer= useSelector((state)=> state.Reducer); 
    const colors = ["#D65DB1", "#FF6F91", "#FF9671", "#FFC75F" , "#42b883"];
    const [activeColor, setActiveColor] = useState(colors[0]);
    const resumeRef = useRef();
  return (
    <Container>
    <div className="one">
       <div  className='colors'>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${'color'} ${
                activeColor === item ? 'active' : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
       <div>
       <ReactToPrint 
        trigger={() => {
          return (
            <button   style={{display:'flex'}}>
              <b style={{marginTop:'5px'}}>Download</b> <ArrowDown />
            </button>
          );
        }}
        content={() => resumeRef.current}
      />
        </div> 
        </div>
        <div className="editor">
        {reducer && getbasicinfo ? 
      <>
       <EditorBasicInfo ref={resumeRef}  activeColor={activeColor}/>
      </> 
      : ''}
       

        </div>
    </Container>
  )
}
const Container = styled.div`

 .one{
    display:flex;
    justify-content: space-between;
    .colors {
        display: flex;
        gap: 20px;
        padding: 0 30px;
        .color {
            height: 36px;
            width: 36px;
            border-radius: 50%;
            background-color: red;
          }
           & .active {
            border: 2px solid #000;
          }
         
        
      }
      button{
        color:#b56cc2 ; 
        margin-right:20px;
    }
     
 }

    
  .editor{
    margin:3% 3% 10% 10% ; 
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.1);
    width:180vh;
  }
  


`;