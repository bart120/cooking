import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from "@material-ui/core";

export default class Header extends React.Component {

    render() {
        return (
            <AppBar color="default" >
                <Toolbar>
                    <Typography variant="h6">
                        Cooking
                    </Typography>
                </Toolbar>

            </AppBar >
        )
    };
}