import { Grid, Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import { AddToBasic_info } from '../redux/actions/action';
export default function BasicInfo() {
    function getFormValues() {
        const storedValues = localStorage.getItem('form');
        if (!storedValues)
            return {
                description:'',
                namel: "",
                title: "",
                LinkedinLink: "",
                GithubLink: "",
                phone: "",
                email: ""
            };
        return JSON.parse(storedValues);
    }
    const [form, setForm] = useState(getFormValues)
    /*const [form, setForm] = useState({
        namel:"",
        title:"",
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
            ...previousValues,
            [e.target.name]: e.target.value,
        }));

    }
    const onSubmit = (e) => {
        e.preventDefault();
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
                    <Grid item xs={6}>
                        <Input label="Name" value={form.namel} name="namel" type="text" placeholder="Enter Your Name" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Title" name="title" value={form.title} type="text" placeholder="Enter  title e.g Frontend Developer" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Linkedin Link" name="LinkedinLink" value={form.LinkedinLink} type="text" placeholder="Enter Your Linkedin  Profile Link" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Github Link" type="text" name="GithubLink" value={form.GithubLink}  placeholder="Enter Your Github Profile Link" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Email" type="email" name="email" placeholder="Enter Your Email" onChange={onChangeHandler} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Phone" type="tel" name="phone" placeholder="Enter Your Phone Number " onChange={onChangeHandler} fullWidth />
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