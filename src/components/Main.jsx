import React from 'react'
import styled from 'styled-components';
import Colors from './Colors';

import Resume from './Resume';
export default function Main() {
   
  return (
    <Container>
       <div className='container resume'>
        <Resume/>

        </div>
      <div>
        <Colors/>
      </div>
     
    </Container>
  )
}
const Container = styled.div`
 

    
  
  


`;
