import { Grid, Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
export default function Projects() {
    return (
        <Container>
            
            <div className="form-group">
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Input label="Name Project" type="text" placeholder="Enter Your Name Project" fullWidth />
                    </Grid>
                    
                    <Grid item xs={6}>
                        <Input  label="Deployed Link" placeholder="Enter deployed link of project"  type="text"  fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Github Link" type="text" placeholder="Enter Github link of project" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Input label="Description" type="text" placeholder="Enter project description" fullWidth />
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