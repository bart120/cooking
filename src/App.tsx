import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Recipes from './components/recipes/recipes/Recipes';

const App: React.FC = () => {
  return (
    <Layout>
      <Route path='/' exact component={Home} />
      <Route path='/recipes' component={Recipes} />
      <Route path='/recipe/:id/:name?' component={Home} />
    </Layout>
  );
}

export default App;
