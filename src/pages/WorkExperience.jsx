import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { Grid, Button } from '@mui/material';

import styled from 'styled-components';
import Input from '../components/Input';
import { AddToWork } from '../redux/actions/action';

export default function WorkExperience() {
   
   
    
   
   
    function getFormValues() {
        const storedValues = localStorage.getItem('work');
    
        if (!storedValues)
            return [{
                company:'',
                location: "",
                startDate: "",
                endDate: "",
                description:'',
               
            },];
        return JSON.parse(storedValues);
    }
    const [work, setwork] = useState(getFormValues)
    useEffect(() => {
        localStorage.setItem('work', JSON.stringify(work));
    }, [work]);
    const dispatch = useDispatch()
   
    const onChangeHandler = (e,index) => {
        let data = [...work];
        data[index][e.target.name] = e.target.value;
        setwork(data);
    }
    const addFields = () => {
        let object = {
            company:'',
            location: "",
            startDate: "",
            endDate: "",
            description:'',
        }
    
        setwork([...work, object])
      }
    
      ///const removeFields = (index) => {
      ///  //let data = [...work];
      ///  //data.splice(index, 1)
      ///  //setwork(data)
      ///  dispatch(RemoveFunction(index))
      ///}
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(AddToWork(work))
        
    }

  return (
    <Container>
  
    <form className="form-group" onSubmit={onSubmit}>


             {work.map((form, index) => {
          return (
            <Grid  key={index} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          
          <Input label="Company Name" type="text" placeholder="Enter Your Company Name e.g Amazon"  name="company" value={form.company} onChange={event => onChangeHandler(event, index)} fullWidth />
         </Grid>
          <Grid item xs={6}>
              <Input label="Location" type="text" placeholder="Enter  Your Location " name="location" value={form.location} onChange={event => onChangeHandler(event, index)} fullWidth />
          </Grid>
          <Grid item xs={6}>
              <Input label="Start Date "   type="date"  placeholder="Enter start date of work"name="startDate" value={form.startDate} onChange={event => onChangeHandler(event, index)} fullWidth />
          </Grid>
          <Grid item xs={6}>
              <Input label="END  Date "   type="date"  placeholder="Enter End date of work" name="endDate" value={form.endDate} onChange={event => onChangeHandler(event, index)} fullWidth />
          </Grid>
          <Grid item xs={12}>
              <Input label="Description" type="text" placeholder="Enter work description"  name="description" value={form.description} onChange={event => onChangeHandler(event, index)} fullWidth />
          </Grid>
          <Grid item  xs={3}>
            <Button variant="contained" onClick={addFields}>+</Button></Grid>  
          <>
          { /*index >0 ? 
          <>
          
          <Grid item   xs={2}>
            <Button  style={{ backgroundColor:'red'}}variant="contained" onClick={() => removeFields(index)}>-</Button></Grid>  
   
          </> 
          :"" */}</>
         
           </Grid>
  
          )})}
          
          
           
            <Grid item xs={6}>
                    <Button variant="contained" type="submit">Save</Button>
            </Grid>
       
       
    </form>
</Container>
  )
}
const Container = styled.div`
  

 
 
 
 `;