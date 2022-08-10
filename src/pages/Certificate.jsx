import React from 'react'
import { Grid, Button } from '@mui/material';

import styled from 'styled-components';
import Input from '../components/Input';
export default function Certificates() {
  return (
    <Container>
  
    <div className="form-group">
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <Input label="Name" type="text" placeholder="Enter name of your certificate" fullWidth />
            </Grid>
            
            <Grid item xs={6}>
                <Input label="Start Date "   type="date"  placeholder="Enter Start Date Of This Education" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <Input label="END  Date "   type="date"  placeholder="Enter End date of This Education" fullWidth />
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