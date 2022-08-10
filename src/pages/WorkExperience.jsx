import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Grid, Button } from '@mui/material';

import styled from 'styled-components';
import Input from '../components/Input';
import { AddToWork } from '../redux/actions/action';
export default function WorkExperience() {
    const workexp = useSelector((state)=> state.Reducer.workexp);
    console.log(workexp)
    const storedValueeees = localStorage.getItem('work');
    console.log(storedValueeees)
    function getFormValues() {
        const storedValues = localStorage.getItem('work');
    
        if (!storedValues)
            return {
                company:'',
               location: "",
                startDate: "",
                endDate: "",
                description:'',
               
            };
        return JSON.parse(storedValues);
    }
    const [work, setwork] = useState(getFormValues)
    useEffect(() => {
        localStorage.setItem('work', JSON.stringify(work));
    }, [work]);
    const dispatch = useDispatch()
    const onChangeHandler = (e) => {
       setwork((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));

    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(AddToWork(work))
        
    }

  return (
    <Container>
  
    <form className="form-group" onSubmit={onSubmit}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
          
            <Input label="Company Name" type="text" placeholder="Enter Your Company Name e.g Amazon"  name="company" value={work.company} onChange={onChangeHandler} fullWidth />
           </Grid>
            <Grid item xs={6}>
                <Input label="Location" type="text" placeholder="Enter  Your Location " name="location" value={work.location} onChange={onChangeHandler} fullWidth />
            </Grid>
            <Grid item xs={6}>
                <Input label="Start Date "   type="date"  placeholder="Enter start date of work"name="startDate" value={work.startDate} onChange={onChangeHandler} fullWidth />
            </Grid>
            <Grid item xs={6}>
                <Input label="END  Date "   type="date"  placeholder="Enter End date of work" name="endDate" value={work.endDate} onChange={onChangeHandler} fullWidth />
            </Grid>
            <Grid item xs={12}>
                <Input label="Description" type="text" placeholder="Enter work description"  name="description" value={work.description} onChange={onChangeHandler} fullWidth />
            </Grid>
            <Grid item xs={6}>
                    <Button variant="contained" type="submit">Save</Button>
                    </Grid>
        </Grid>
       
    </form>
</Container>
  )
}
const Container = styled.div`
  

 
 
 
 `;