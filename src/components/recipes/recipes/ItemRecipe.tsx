import React, { Component } from 'react';
import { RecipeModel } from '../../../models/RecipeModel';
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import './ItemRecipe.css';

interface ItemRecipeProps {
    item: RecipeModel;
}

export default class ItemRecipe extends Component<ItemRecipeProps> {
    render() {
        return (
            <GridListTile>
                <img src={this.props.item.image} alt={this.props.item.name} className="img" />
                <GridListTileBar
                    title={this.props.item.name}
                    subtitle={<span>by: moi</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${this.props.item.name}`} className="icon">
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </GridListTile>
        );
    }
}