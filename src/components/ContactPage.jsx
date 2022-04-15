import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './Header';
import { Typography } from '@mui/material';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
    <Header/>


    <Typography
                    variant="h2"
                    fontFamily="Poppins"
                    color='#01937C'
                    component="div"
                    sx={{  display: {fontWeight:'bold'}, padding:"5%" }} 
                > Please add a recipe ! 
            </Typography>


    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Mail adress"
          multiline
          maxRows={4}
          value={value}
          placeholder="name@gmail.com"
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="outlined-textarea"
          label="Recipe label"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Ingredients, image and url"
          variant="filled"
        />

      
      </div>
    </Box>
    </>
  );
}