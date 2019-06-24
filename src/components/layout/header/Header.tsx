import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

export default class Header extends React.Component {

    render() {
        return (
            <AppBar color="default" >
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Cooking
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar >
        )
    };
}