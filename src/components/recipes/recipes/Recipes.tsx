import React, { Component } from 'react';
import ItemRecipe from './ItemRecipe';
import { RecipeModel } from '../../../models/RecipeModel';
import './Recipes.css';
import { GridList } from '@material-ui/core';
import RecipesService from '../../../services/RecipesService';

interface RecipesState {
    recipes: Array<RecipeModel>;
}

export default class Recipes extends Component<{}, RecipesState> {
    private service = new RecipesService();

    constructor(props: any) {
        super(props);
        this.state = { recipes: [] };
    }

    /* data: Array<RecipeModel> = [
         { id: 1, name: 'recette1', image: '/images/recipe.png' },
         { id: 2, name: 'recette2', image: '/images/recipe.png' },
         { id: 3, name: 'recette3', image: '/images/recipe.png' },
         { id: 4, name: 'recette4', image: '/images/recipe.png' }
     ];*/

    componentDidMount() {
        this.service.getAll()
            .then(
                data => {
                    this.setState({ recipes: data as Array<RecipeModel> });
                }
            );
    }


    render() {
        return (
            <div className="root">
                <GridList cols={3} cellHeight={180} className="gridList">
                    {this.state.recipes.map((item, index) => (
                        <ItemRecipe item={item} key={item._id} />
                    ))}
                </GridList>
            </div>
        );



    }
}