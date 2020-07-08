import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = useCallback(
    () => {
      setLoggedIn(true);
    }, [],
  )

  const logout = useCallback(
    () => {
      setLoggedIn(false);
    }, [],
  )

  return <AuthContext.Provider>
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/:userID/places' exact>
            <UserPlaces />
          </Route>
          <Route path='/places/new' exact>
            <NewPlace />
          </Route>
          <Route path='/place/:placeID'>
            <UpdatePlace />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  </AuthContext.Provider>
}

export default App;
