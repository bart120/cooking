import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ItemRecipe from './components/recipes/recipes/ItemRecipe';
import { RecipeModel } from './models/RecipeModel';
import { shallow } from 'enzyme';

describe('tests sur APP', () => {

  //beforeAll
  //beforeEach

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });



});
