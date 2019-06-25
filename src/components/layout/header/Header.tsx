import React from "react";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';


// import { makeStyles, createStyles } from "@material-ui/styles";

/* const usesStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2)
        }
    }));*/


class Header extends React.Component<RouteComponentProps> {

    loginOnclick(): void {
        this.props.history.push('/login');

    }

    render() {
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
                        <Link to="/">Home</Link>
                        <Link to="/recipes">Recettes</Link>

                        <Link to="/recipe/1/colombo-de-poulet">Recette 1</Link>
                        <Link to="/recipe/2/chatrou">Recette 2</Link>

                        <Button color="inherit" onClick={this.loginOnclick.bind(this)}>Login</Button>
                    </Toolbar>

                </AppBar >
            </div>
        )
    };
}

export default withRouter(Header);