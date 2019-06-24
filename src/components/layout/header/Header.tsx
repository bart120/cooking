import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
// import { makeStyles, createStyles } from "@material-ui/styles";

/* const usesStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2)
        }
    }));*/

export default class Header extends React.Component {

    
    render() {
        // const classes = usesStyles();
        return (
            <div className="root">
                <AppBar color="default" >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="title">
                            Cooking
                    </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>

                </AppBar >
            </div>
        )
    };
}