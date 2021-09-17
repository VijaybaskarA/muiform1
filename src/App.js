import "./styles.css";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const currencies = [
  {
    value: 'a',
    label: 'reddy'
  },
  {
    value: 'b',
    label: 'prasanth'
  },
  {
    value: 'c',
    label: 'setti'
  },
]
const steps = [
  '0%',
  '',
  '',
  '50',
  '',
  '',
  '100%',

];


export default function App() {
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  }
    return (
       

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
    <div className="App">
    
      <AppBar>
        <toolbar>
          <h1>SIGNIN FORM </h1>
        </toolbar>
      </AppBar>

      <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
      <form>
      <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="setgoal"
          variant="outlined"
        />
      <TextField
          id="select name"
          select
          label=" catagory"
          value={currency}
          onChange={handleChange}
          helperText="Please select your category "
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="select name"
          select
          label="Select"
          label="Diversity catagory"
          value={currency}
          onChange={handleChange}
          helperText="Please select your diversity"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
   

        { 
    <Box sx={{ width: '70%' }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
   }


        
       
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Diversity catagory"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Attribute"
          variant="outlined"
          id="select name"
          select
          label="Diversity catagory"
          value={currency}
          onChange={handleChange}
          helperText="Please select your "
          
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="goal stage"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="job id"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="job region"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="primary">
          save
        </Button>
      </form>
    </div>
    </Box>
  );
  }