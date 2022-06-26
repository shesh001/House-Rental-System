import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Rental House
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();


export default function SignUp() {
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({

        fname: data.get('fname'),
        lname: data.get('lname'),
        email: data.get('email'),
        password: data.get('password'),
        dob: data.get('dob'),
        gender: data.get('gender'),
        cno: data.get('cno'),
        address: data.get('address'),
        district: data.get('district'),
        state: data.get('state'),
        country: data.get('country'),
        pincode: data.get('pincode'),
        secquestion: data.get('secquestion'),
        secanswer: data.get('secanswer'), 
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" /*maxWidth="xs" */>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            alignItems: 'center',
          }}
        ></Box>

        <Avatar sx={{ ml: 69, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align='center'>
            Sign up
          </Typography>


        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 3, ml: 10, mr: 5, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
              autoFocus
        />
        
        <TextField
          required
          id="lname"
              label="Last Name"
              name="lname"
              autoComplete="lname"
              
        />
         <TextField
          required
          id="email"
              label="Email"
              name="email"
              autoComplete="email"
              
        />
         <TextField
          required
          id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="password"
              
        />
         <TextField
          required
          id="dob"
              label=""
              helperText="Please enter date of birth"
              name="dob"
              type="date"
              autoComplete="dob"
              
        />
         <TextField
          required
          id="gender"
              label="Gender"
              name="gender"
              autoComplete="gender"
        />
        <TextField
          required
          id="cno"
              label="Contact Number"
              name="cno"
              type="number"
              autoComplete="cno"
        />
        <TextField
          required
          id="address"
              label="Address"
              name="address"
              autoComplete="address"
        />
        <TextField
          required
          id="district"
              label="District"
              name="district"
              autoComplete="district"
        />
        <TextField
          required
          id="state"
              label="State"
              name="state"
              autoComplete="state"
        />
        <TextField
          required
          id="country"
              label="Country"
              name="country"
              autoComplete="country"
        />
        <TextField
          required
          id="pincode"
              label="Pin Code"
              name="pincode"
              type="number"
              autoComplete="pincode"
        />
        <TextField
          required
          id="secquestion"
              label="Security Question"
              name="secquestion"
              autoComplete="secquestion"
        />
        <TextField
          required
          id="secanswer"
              label="Security Answer"
              name="secanswer"
              autoComplete="secanswer"
        />

      </div>

            <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, ml: 52, mb: 2, width: '44ch'}}
            >
              Sign In
            </Button>
            </div>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}