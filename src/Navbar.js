import React from "react";
import "./styles.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Fab } from "@material-ui/core";
import { Facebook, Twitter, Home, GitHub, Instagram } from "@material-ui/icons";
import styled from "styled-components";

export default function Nav(props) {
  const fabTheme = createMuiTheme({
    overrides: {
      MuiFab: {
        primary: {
          backgroundColor: "#00a650"
        }
      }
    }
  });

  const useStyles = makeStyles(theme => ({
    appBar: {
      background: "transparent",
      boxShadow: "none",
      top: "auto",
      bottom: 0
    },
    title: {
      flexGrow: 1,
      color: ""
    },
    button: {
      background: "rgba(0, 0, 0, 0.7)",
      marginEnd: "20px",
      outline: "2px solid hotpink"
      
    },
    fab: {
      margin: theme.spacing(1),
      background: "rgba(0, 0, 0, 0.7)"
    }
  }));

  //console.log(items);
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="fixed" className={classes.appBar} style={{
          backgroundColor: "transparent"
        }}>
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
         
            <Button
              id="button"
              onClick={props.search}
              color="inherit"
              className={classes.button}
            >
              Search
            </Button>
            <Button
              id="button"
              onClick={props.reset}
              color="inherit"
              className={classes.button}

            >
              Reset
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
