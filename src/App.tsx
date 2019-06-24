import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Recipes from './components/recipes/recipes/Recipes';
import Recipe from './components/recipes/recipe/Recipe';

const App: React.FC = () => {
  return (
    <Layout>
      <Route path='/' exact component={Home} />
      <Route path='/recipes' component={Recipes} />
      <Route path='/recipe/:id/:name?' component={Recipe} />
    </Layout>
  );
}

export default App;
