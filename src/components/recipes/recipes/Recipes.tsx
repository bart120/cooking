import React, { Component } from 'react';
import ItemRecipe from './ItemRecipe';
import { RecipeModel } from '../../../models/RecipeModel';
import './Recipes.css';
import { GridList } from '@material-ui/core';


export default class Recipes extends Component {


    data: Array<RecipeModel> = [
        { id: 1, name: 'recette1', image: '/images/recipe.png' },
        { id: 2, name: 'recette2', image: '/images/recipe.png' },
        { id: 3, name: 'recette3', image: '/images/recipe.png' },
        { id: 4, name: 'recette4', image: '/images/recipe.png' }
    ];


    render() {
        return (
            <div className="root">
                <GridList cellHeight={180} className="gridList">
                    {this.data.map((item, index) => (
                        <ItemRecipe item={item} />
                    ))}
                </GridList>
            </div>
        );



    }
}