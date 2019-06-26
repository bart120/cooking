import BaseService from "./BaseService";
import { RecipeModel } from "../models/RecipeModel";
import ErrorModel from "../models/ErrorModel";
import conf from "../conf";


export default class RecipesService extends BaseService {


    getAll(): Promise<Array<RecipeModel> | ErrorModel> {
        return fetch(`${conf.URL}/recipes/`, this.getRequestOptions())
            .then(this.handleResponse);
    }

    getRecipeById(id: string): Promise<RecipeModel | ErrorModel> {
        return fetch(`${conf.URL}/recipes/${id}`, this.getRequestOptions())
            .then(this.handleResponse);
    }

    insertRecipe(model: RecipeModel): Promise<RecipeModel | ErrorModel> {
        return fetch(`${conf.URL_RECIPES}`, this.getRequestOptions('POST', model))
            .then(this.handleResponse);
    }

    updateRecipe(model: RecipeModel): Promise<RecipeModel | ErrorModel> {
        return fetch(`${conf.URL_RECIPES}/${model._id}`, this.getRequestOptions('PUT', model))
            .then(this.handleResponse);
    }

    deleteRecipe(id: string): Promise<RecipeModel | ErrorModel> {
        return fetch(`${conf.URL_RECIPES}/${id}`, this.getRequestOptions('DELETE'))
            .then(this.handleResponse);
    }
}