import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../Home'));
const CityWeathers = lazy(() => import('../CityWeathers'));
const Search = lazy(() => import('../Search'));
// const CityInfo = lazy(() => import('../CityInfo'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
             <Route exact path="/">
               <Home />
             </Route>
             <Route exact path="/weathers">
               <CityWeathers />
             </Route>
             <Route exact path="/search"> 
               <Search />
             </Route>       
             {/* <Route exact path="/city/:name">  // TODO: Implement CityInfo
               <CityInfo />
             </Route> */}
          </Switch>
        </Suspense>
    );
};

export default Routes;
