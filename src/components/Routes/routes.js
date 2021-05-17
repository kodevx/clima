import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../Home'));
const Weather = lazy(() => import('../Weather'));
// const CityInfo = lazy(() => import('../CityInfo'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
             <Route exact path="/">
               <Home />
             </Route>
             <Route exact path="/weather/:searchCity">
               <Weather />
             </Route>      
             {/* <Route exact path="/city/:name">   // TODO: Implement CityInfo
               <CityInfo />
             </Route> */}
          </Switch>
        </Suspense>
    );
};

export default Routes;
