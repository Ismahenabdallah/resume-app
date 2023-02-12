import { Grid, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import { AddToBasic_info } from '../redux/actions/action';
export default function BasicInfo() {
    //const getbasicinfo = useSelector((state)=> state.Reducer.BasicInfo);
    const [avatar,setavatar]=useState('')
   
    function getFormValues() {
        const storedValues = localStorage.getItem('form');

        if (!storedValues)
            return {
               avatar,
                adresse:"",
                description:'',
                portfolio: "",
                profession: "",
                LinkedinLink: "",
                GithubLink: "",
                phone: "",
                email: "",
             
            
            };
        return JSON.parse(storedValues);
    }
    const [form, setForm] = useState(getFormValues)
    const  imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2 ){
                setavatar(reader.result)
              }
           
          }
         
        reader.readAsDataURL(e.target.files[0])
      }
   
   
    /*const [form, setForm] = useState({
        namel:"",
        profession:"",
        LinkedinLink:"",
        GithubLink:"",
        phone:"",
        email:""

    })*/
    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form));
    }, [form]);
    const dispatch = useDispatch()
    const onChangeHandler = (e) => {
        //setForm({
        //  ...form,
        //  [e.target.name]: e.target.value
        //
        //})
        setForm((previousValues) => ({
            ...previousValues,avatar,
            [e.target.name]: e.target.value,
          
        }));

    }
  
    const onSubmit = (e) => {
        e.preventDefault();
    //var formData = new FormData()
   // formData.append('file', avatar)
   // formData.append('description', form.description)
   // formData.append('profession', form.profession)
   // formData.append('namel', form.namel)
   // formData.append('email', form.email)
   // formData.append('phone', form.phone)
   // formData.append('LinkedinLink', form.LinkedinLink)
   // formData.append('GithubLink', form.GithubLink)
    
                
        dispatch(AddToBasic_info(form))
        console.log(form)
    }

    return (
        <Container>
            
            <form className="form-group" onSubmit={onSubmit}>
            <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                
                <Input label="Description" name="description" value={form.description} placeholder="Basic Info" onChange={onChangeHandler} fullWidth focused color="secondary" />
            </div>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
               
                        <Input label="image"   type="file"  placeholder="Enter Your Image" onChange={imageHandler}   fullWidth />
                    </Grid>
                   
                    <Grid item xs={6}>
                        <Input label="Adresse" value={form.adresse} name="adresse" type="text" placeholder="Enter Your Adresse" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                       
                        <Input label="profession" name="profession" value={form.profession} type="text" placeholder="Enter  profession e.g Frontend Developer" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Linkedin Link" name="LinkedinLink" value={form.LinkedinLink} type="text" placeholder="Enter Your Linkedin  Profile Link" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Github Link" type="text" name="GithubLink" value={form.GithubLink}  placeholder="Enter Your Github Profile Link" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Portfolio" value={form.portfolio} name="portfolio" type="text" placeholder="Enter Your  Portfolio" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Email" type="email" name="email" placeholder="Enter Your Email" value={form.email} onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Phone" type="tel" name="phone" placeholder="Enter Your Phone Number " value={form.phone}onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Button type="submit" variant="contained">Save</Button>
                    </Grid>
                </Grid>


            </form>

        </Container>
    )
}
const Container = styled.div`
  

 
 
 
 `;