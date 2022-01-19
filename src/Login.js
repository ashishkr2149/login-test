import React,{ useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TestState } from './TestContext';
import axios from 'axios';

const theme = createTheme();

const Login = () => {
	const{ route, setRoute, token, setToken, refreshToken, setRrefreshToken } = TestState();

	const postLogin = () => {
		axios.post('http://devenv.pustakey.com:1048/users/login', {
    		'id':'9929999991',
    		'password':'1Qw@'
			})
			.then(function (response) {
				console.log(response.data.token);
		    	setToken(response.data.token);
		    	setRrefreshToken(response.data.refreshToken);
			})
			.catch(function (error) {
				console.log(error);
		});
	}

	return (
		<ThemeProvider theme={theme}>
    	  <Grid container component="main"
    	  	sx={{ 
    	  		width: '60%',
    	  		justifyContent: 'center',
    	  		marginRight: 'auto',
    	  		marginLeft: 'auto',
    	  		marginTop: '7.5%',
    	  		marginBottom: '7.5%',
    	  		boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )'
    	  	}}>
    	    <CssBaseline />
    	    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    	      <Box
    	        sx={{
    	          my: 8,
    	          mx: 4,
    	          display: 'flex',
    	          flexDirection: 'column',
    	          alignItems: 'center',
    	        }}
    	      >
    	        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    	          <LockOutlinedIcon />
    	        </Avatar>
    	        <Typography component="h1" variant="h5">
    	          Sign in
    	        </Typography>
    	        <Box noValidate sx={{ mt: 1 }}>
    	          <TextField
    	            margin="normal"
    	            required
    	            fullWidth
    	            id="email"
    	            label="Email Address"
    	            name="email"
    	            autoComplete="email"
    	            autoFocus
    	          />
    	          <TextField
    	            margin="normal"
    	            required
    	            fullWidth
    	            name="password"
    	            label="Password"
    	            type="password"
    	            id="password"
    	            autoComplete="current-password"
    	          />
    	          <FormControlLabel
    	            control={<Checkbox value="remember" color="primary" />}
    	            label="Remember me"
    	          />
    	          <Button
    	            fullWidth
    	            variant="contained"
    	            sx={{ mt: 3, mb: 2, backgroundColor: 'brown' }}
    	            onClick={() => {
    	            	postLogin();
    	            	setRoute("home");
    	            }}
    	          >
    	            Sign In
    	          </Button>
    	          <Grid container>
    	            <Grid item xs>
    	              <Link href="#" variant="body2">
    	                Forgot password?
    	              </Link>
    	            </Grid>
    	          </Grid>
    	        </Box>
    	      </Box>
    	    </Grid>
    	    <Grid
    	      item
    	      xs={false}
    	      sm={4}
    	      md={7}
    	      sx={{
    	        backgroundImage: 'url(https://source.unsplash.com/random)',
    	        backgroundRepeat: 'no-repeat',
    	        backgroundColor: (t) =>
    	          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    	        backgroundSize: 'cover',
    	        backgroundPosition: 'center',
    	        boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )'
    	      }}
    	    />
    	  </Grid>
    	</ThemeProvider>
	)
}

export default Login