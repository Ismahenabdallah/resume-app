import React from 'react'
import { Grid, Button } from '@mui/material';

import styled from 'styled-components';
import Input from '../components/Input';
export default function Others() {
  return (
    <Container>
  
    <div className="form-group">
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <Input label="Titre" type="text" placeholder="other" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <Input label="other" type="text" placeholder="Enter something" fullWidth />
            </Grid>
            <Grid item xs={6}>
                    <Button variant="contained">Save</Button>
                    </Grid>
            
           
           
          
        </Grid>
    </div>
</Container>
  )
}
const Container = styled.div`
  

 
 
 
 `;