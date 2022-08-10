import React from "react";



import {  TextField } from '@mui/material';

function Input({ label, ...props }) {
  return (
    <div className="">
         <TextField id="standard-basic"  label={label} variant="standard"   {...props} />
    </div>
  );
}

export default Input;
