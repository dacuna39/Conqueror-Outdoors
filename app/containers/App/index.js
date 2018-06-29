/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollIcon from 'components/ScrollIcon';

import Home from 'containers/Home/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import ShopPage from 'containers/ShopPage/Loadable';
import BrandPage from 'containers/BrandPage/Loadable';
import MediaPage from 'containers/MediaPage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import ProductReducer from './ProductReducer';

var store = createStore(ProductReducer);
//console.log('store', store);

export default function App() {

  return (
  
    <div>
      <Helmet
        titleTemplate="Conqueror Outdoors"
        defaultTitle="Conqueror Outdoors"
      >
        <meta name="description" content="Conwueror Outdoors" />
      </Helmet>

      <Header />
      <ScrollIcon />
      
      <Switch>
        <Route exact path="/" component={Home} />
  
        <Route path="/Product" component={ProductPage} />
        <Route path="/Search" component={SearchPage} />
        <Route path="/Shop" component={ShopPage} />
        <Route path="/Brands" component={BrandPage} />
        <Route path="/Media" component={MediaPage} />
 
        <Route path="" component={NotFoundPage} />
      </Switch>

      <Footer />
    </div>

  );
}
