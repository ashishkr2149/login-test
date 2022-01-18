import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

const CreateUser = () => {
	return (
       	<ThemeProvider theme={theme}>
    	  <Grid container component="main"
    	  	lg={4}
    	  	sx={{ 
    	  		justifyContent: 'center',
    	  		marginRight: 'auto',
    	  		marginLeft: 'auto',
    	  		marginTop: '5%',
    	  		marginBottom: '5%',
    	  		boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )',
    	  		borderRadius: '10px',
    	  	}}>
    	    <CssBaseline />
    	    <Grid
    	    	item
    	    	xs={12}
    	    	sm={12}
    	    	md={12}
    	    	component={Paper}
    	    	elevation={6}
    	    	square
    	    	sx={{
    	    		borderRadius: '10px',
    	    	}}
    	    >
    	      <Box
    	        sx={{
    	          my: 4,
    	          mx: 4,
    	          display: 'flex',
    	          flexDirection: 'column',
    	          alignItems: 'center',
    	          borderRadius: '10px',
    	        }}
    	      >
    	        <Typography component="h1" variant="h4">
    	          Create User
    	        </Typography>
    	        <Box noValidate sx={{ mt: 1 }}>
    	          <TextField
    	   		    margin="normal"
    	   		    fullWidth
    	   		    required
    	   		    id="firstName"
    	   		    label="First Name"
    	   		    name="firstName"
    	   		    autoFocus
    	   		  />
    	   		  <TextField
    	   		    margin="normal"    	 
    	   		    fullWidth
    	   		    required
    	   		    id="lastName"
    	   		    label=" Last Name"
    	   		    name="lastName"
    	   		  />
    	          <TextField
    	            margin="normal"
    	            required
    	            fullWidth
    	            id="email"
    	            label="Email Address"
    	            name="email"
    	          />
    	          <TextField
    	            margin="normal"
    	            required
    	            fullWidth
    	            name="password"
    	            label="Password"
    	            type="password"
    	            id="password"
    	          />
    	          <Box sx={{
    	   		  	display: 'flex',
    	   		  	justifyContent: 'space-between',
    	   		  	marginRight: '10%',
    	   		  	marginLeft: '10%'
    	   		  }}>
    	          	<FormControlLabel
    	   	      	  control={<Checkbox value="A" color="primary" />}
    	   	      	  label="A"
    	   	      	/>
	  	   	      	<FormControlLabel
    	   	      	  control={<Checkbox value="B" color="primary" />}
    	   	      	  label="B"
    	   	      	/>
    	   	      	<FormControlLabel
    	   	      	  control={<Checkbox value="C" color="primary" />}
    	   	      	  label="C"
    	   	      	/>
    	   	      </Box>
    	          <Button
    	            fullWidth
    	            variant="contained"
    	            sx={{ mt: 3, mb: 2, backgroundColor: 'brown' }}
    	          >
    	            Sign In
    	          </Button>
    	        </Box>
    	      </Box>
    	    </Grid>
    	  </Grid>
    	</ThemeProvider>
	)
}

export default CreateUser