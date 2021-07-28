import React, { Fragment } from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
        maxWidth: 160,
      },
  }));

  export default function Dashboard() {
    const classes = useStyles();
      //return <h1>Hello, {this.props.name}</h1>;
      return (
        <AppBar position="static">
  <Toolbar>
  <img src="showcase.jpg" alt="logo" className={classes.logo} />
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
      );
    
  }
