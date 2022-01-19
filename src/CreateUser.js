import React,{ useState } from 'react';
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
import { TestState } from './TestContext';
import axios from 'axios';

const theme = createTheme();

const CreateUser = () => {
	const{ route, setRoute } = TestState();

	const [email, setEmail] = useState("");
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [phone, setPhone] = useState("");
	const [pass, setPass] = useState("");
	const [permission, setPermission] = useState("000");
	const [info, setInfo] = useState("");
	const [a, setA] = useState(false);
	const [b, setB] = useState(false);
	const [c, setC] = useState(false);

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiOTUwNTM1MzQxMDkiLCJwZXJtaXNzaW9uIjoiMTExIn0sImlhdCI6MTY0MjU5NjM5MCwiZXhwIjoxNjQyNjgyNzkwfQ.l6L11ZBAwR4RNb7JNsvn4MTj8SJLTMI2FhKWC7zpsMO2q-edroXRdc8rlc0fFjOgFj1_B6JbC9Ee3UUOE0gAjfZtPGIhUWJifSEiNCDi4dMl6DfWQrsDVfQQEYLeGdBu2qg1COvCT4R0kKGiuUi2CdXC7V8rLEFt_e1VYXtck5ldrDflzYhNNZsJ-tkkLtHbcl9XJXivA-QN0Th7qh19C6b4r-mfaa_kUW4GeU7jOleKKqHukGE_mVEIbV_1FbXlF1MnZIcN8w33cGod7gMmLWh-VD5MpHN6k7ZbTaoYPFefBdk6OhY9wtx76YqSV4gKpGL5_NPRFpiTQBMCj4HpaQ");
	
	var raw = JSON.stringify({
		"email":email,
		"phone":phone,
		"password":pass,
		"firstName":first,
		"lastName":last,
		"permission":permission
	});

	// const onCheckbox=()=>{
	// 	(a===false&&b===false&&c===false)?setPermission("000"):
	// 	(a===false&&b===false&&c===true)?setPermission("001"):
	// 	(a===false&&b===true&&c===false)?setPermission("010"):
	// 	(a===false&&b===true&&c===true)?setPermission("011"):
	// 	(a===true&&b===false&&c===false)?setPermission("100"):
	// 	(a===true&&b===false&&c===true)?setPermission("101"):
	// 	(a===true&&b===true&&c===false)?setPermission("110"):
	// 	setPermission("111")
	// }

	const handleChange=( checked,value )=>{
		value === "A"?setA(checked):
		(value==="B")?setB(checked):
		setC(checked);
		(a===false&&b===false&&c===false)?setPermission("000"):
		(a===false&&b===false&&c===true)?setPermission("001"):
		(a===false&&b===true&&c===false)?setPermission("010"):
		(a===false&&b===true&&c===true)?setPermission("011"):
		(a===true&&b===false&&c===false)?setPermission("100"):
		(a===true&&b===false&&c===true)?setPermission("101"):
		(a===true&&b===true&&c===false)?setPermission("110"):
		setPermission("111")
	}
	
	console.log(raw)

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	const postSignUp = async() => {
		fetch("http://devenv.pustakey.com:1048/users/signup", requestOptions)
			.then(response => response.text())
			.then(result => {
				console.log(result)
				setInfo(result)
			})
		  	.catch(error => console.log('error', error));
	}	

	return (
       	<ThemeProvider theme={theme}>
    	  <Grid container component="main"
    	  	sx={{ 
    	  		justifyContent: 'center',
    	  		marginRight: 'auto',
    	  		marginLeft: 'auto',
    	  		marginTop: '3%',
    	  		marginBottom: '3%',
    	  		boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )',
    	  		borderRadius: '10px',
    	  		width: '33.33%'
    	  	}}>
    	    <CssBaseline />
    	    <Grid
    	    	item
    	    	component={Paper}
    	    	elevation={6}
    	    	square
    	    	sx={{
    	    		borderRadius: '10px',
    	    	}}
    	    >
    	      <Box
    	        sx={{
    	          mt: 2,
    	          mx: 2,
    	          px: 2,
    	          py: 2,
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
    	   		    onChange={(e) => setFirst(e.target.value)}
    	   		  />
    	   		  <TextField
    	   		    margin="normal"    	 
    	   		    fullWidth
    	   		    required
    	   		    id="lastName"
    	   		    label=" Last Name"
    	   		    name="lastName"
    	   		    onChange={(e) => setLast(e.target.value)}
    	   		  />
    	          <TextField
    	            margin="normal"
    	            required
    	            fullWidth
    	            id="email"
    	            label="Email Address"
    	            name="email"
    	            onChange={(e) => setEmail(e.target.value)}
    	          />
    	          <TextField
    	            margin="normal"
    	            required
    	            fullWidth
    	            name="password"
    	            label="Password"
    	            type="password"
    	            id="password"
    	            onChange={(e) => setPass(e.target.value)}
    	          />
    	          <TextField
    	            margin="normal"
    	            required
    	            fullWidth
    	            name="phone_no"
    	            label="Phone No"
    	            type="numeric"
    	            id="phone_no"
    	            onChange={(e) => setPhone(e.target.value)}
    	          />
    	          <Box sx={{
    	   		  	display: 'flex',
    	   		  	justifyContent: 'space-between',
    	   		  	marginRight: '10%',
    	   		  	marginLeft: '10%'
    	   		  }}>
    	          	<FormControlLabel
    	   	      	  control={<Checkbox value="A" color="primary" 
    	   	      	  onChange={(e)=>{
    	   	      	  	console.log(e.target.checked)
    	   	      	  	handleChange( e.target.checked, e.target.value )
    	   	      	  }}/>}
    	   	      	  label="A"
    	   	      	/>
	  	   	      	<FormControlLabel
    	   	      	  control={<Checkbox value="B" color="primary" 
    	   	      	  onChange={(e)=>{
    	   	      	  	console.log(e.target.checked)
    	   	      	  	handleChange( e.target.checked, e.target.value)
    	   	      	  }} />}
    	   	      	  label="B"
    	   	      	/>
    	   	      	<FormControlLabel
    	   	      	  control={<Checkbox value="C" color="primary" 
    	   	      	  onChange={(e)=>{
    	   	      	  	console.log(e.target.checked)
    	   	      	  	handleChange( e.target.checked, e.target.value )
    	   	      	  }} />}
    	   	      	  label="C"
    	   	      	/>
    	   	      </Box>
    	          <Button
    	            fullWidth
    	            variant="contained"
    	            sx={{ mt: 3, mb: 2, backgroundColor: 'brown' }}
    	            onClick={() => {
    	            	postSignUp();
    	            	console.log("hi");
    	            }}
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