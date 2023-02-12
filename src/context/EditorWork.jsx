/* eslint-disable array-callback-return */
import React, { forwardRef, useEffect, useRef } from 'react'

import { useSelector } from 'react-redux';
import styled from 'styled-components';

const EditorWork = forwardRef((props, ref) => {
  const containerRef = useRef();
  const getwork = useSelector((state) => state.Reducer.workexp);
  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);

  }, [props.activeColor]);
  return (
    <Container ref={ref} >
      <div className='container' ref={containerRef}>



        {getwork.map(({ company, location, startDate, endDate, description }) => (
          <ul>
            
            <li>
              <p>{company} <span>({location})</span></p>
             </li>
             {startDate || endDate || description ?    <ul>
              {startDate ? 
               <li>
             <p> start Date :{startDate}</p>
              </li>:""}
              {endDate ? <li>
               <p> end Date :{endDate}</p>
              </li>:""}
              {description ? <li>
                <p>{description}</p>
              </li> :""}

             </ul> :""}
          
          </ul>
        ))}






      </div>





    </Container>
  )
})
const Container = styled.div`
.container{
  
--color: #239ce2;

width:76vh;







 
    
   
  
 

    
    p{
      color:gray;
     
    }
 
}
`;


export default EditorWork;
