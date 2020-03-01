import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import LoginButton from './LoginButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      marginBottom: '1em',
    },
    title: {
      flexGrow: 1,
    },
  })
);

const TopMenuBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.bar} position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Sickla IF tränarplanerare
        </Typography>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default TopMenuBar;
