import React,{ useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MessageIcon from '@mui/icons-material/Message';
import { mainListItems, secondaryListItems } from './listitems';
import Chart from './Chart';
import Data from './Data';
import Description from './Description';
import { TestState } from './TestContext';
import CreateUser from './CreateUser';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// const mdTheme = createTheme();

const mdTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      default: '#424242',
      paper: '#fff',
    },
  },
});

// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

// export const themeOptions: ThemeOptions = {
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#fff',
//     },
//     secondary: {
//       main: '#f48fb1',
//     },
//     background: {
//       default: '#212121',
//       paper: '#424242',
//     },
//   },
// };

const Dashboard = () => {
const [open, setOpen] = useState(true);
const{ route, setRoute } = TestState();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1,cursor: 'pointer' }}
              onClick={()=>{setRoute("home")}}
            >
              Dashboard
            </Typography>
            {route==='home'?<Button
                            variant="contained"
                            sx={[
                                { mr: 2,
                                  color: '#fff',
                                  backgroundColor: (theme) =>
                                  theme.palette.secondary.main },
                                (theme) => ({
                                  '&:hover': {
                                    backgroundColor: '#636363',
                                  },
                                }),
                              ]}
                          onClick={() => setRoute("create")}
                          >
                            Create User
                        </Button>:<></>}
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MessageIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
          	color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <Typography
              variant="h5"
              color="inherit"
              // noWrap
              sx={{ flexGrow: 1 }}
            >
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {
            route ==="home"?
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        borderRadius: '10px',
                        boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )'
                      }}
                    >
                      <Chart />
                    </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                        borderRadius: '10px',
                        boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )'
                      }}
                    >
                      <Data />
                    </Paper>
                  </Grid>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: '10px',boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )' }}>
                      <Description />
                    </Paper>
                  </Grid>
                </Grid>
              </Container>:
          <CreateUser />
          }
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
