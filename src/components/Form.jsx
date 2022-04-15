import React from 'react';
import { useState } from 'react';
import InputForm from './InputForm';
import { Button } from '@mui/material';


const style = {
    display:'flex',
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems : "center",
    padding: '1em',
    borderRadius: '4px',
    backgroundColor : "white",
    margin: '25px',
    width: "40%",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    fontFamily: "Poppins",
    fontWeight: 'bold'
  };

function Form() {
    const [form, setForm] = useState({
        familyName: '',
        firstName: '',
        email: '',
        message:''
    })

    const {familyName, firstName, email, message} = form;

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`${firstName}, thanks for your feedback, we will answer you as soon as possible !`)
    }

  return (
    <div style={style}>
        <form style={{display: 'flex', flexDirection: 'column'}}onSubmit={handleSubmit}>
            <InputForm desc="firstName" label= "First name : " value={firstName} onChange={handleChange} type="text" required="required"/>
            <InputForm desc="familyName" label= "Last name : " value={familyName} onChange={handleChange} type="text" required="required"/>
            <InputForm desc="email" label= "Email : " value={email} onChange={handleChange} type="text" required="required"/>
            <InputForm desc="message" label= "Message: " value={message} onChange={handleChange} type="text" required="required"/>
            <Button
                variant='contained'
                color='success'
                type='submit'
                sx={{alignSelf:'center'}}
            >
                Submit
            </Button>
        </form>
    </div>
  )
}

export default Form