import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../Home'));
const CityWeathers = lazy(() => import('../CityWeathers'));
// const CityInfo = lazy(() => import('../CityInfo'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
             <Route exact path="/">
               <Home />
             </Route>
             <Route exact path="/cityWeathers">
               <CityWeathers />
             </Route>
             {/* <Route exact path="/searchWeather?city=dubai">  // TODO: Implement Search City Weather Page
               <SearchWeather />
             </Route>        */}
             {/* <Route exact path="/city/:name">  // TODO: Implement CityInfo
               <CityInfo />
             </Route> */}
          </Switch>
        </Suspense>
    );
};

export default Routes;
