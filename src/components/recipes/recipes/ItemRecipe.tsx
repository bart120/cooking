import React, { Component } from 'react';
import { RecipeModel } from '../../../models/RecipeModel';
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import './ItemRecipe.css';

interface ItemRecipeProps {
    item: RecipeModel;
}

class ItemRecipe extends Component<ItemRecipeProps & RouteComponentProps> {

    detail(id: string): void {
        this.props.history.push(`/recipe/${id}`);
    }

    render() {
        return (
            <GridListTile>
                <img src="/images/recipe.png" alt={this.props.item.name} className="img" />

                <GridListTileBar
                    title={this.props.item.name}
                    subtitle={<span>by: moi</span>}
                    actionIcon={
                        <IconButton onClick={() => this.detail(this.props.item._id)} aria-label={`info about ${this.props.item.name}`} className="icon">
                            <InfoIcon />
                        </IconButton>
                    }
                />

            </GridListTile>
        );
    }
}

export default withRouter(ItemRecipe);