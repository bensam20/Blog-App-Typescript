import React, {useContext} from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../modules/Authentication/AuthenticationContext';

function PrivateRoute() {
    const authContext = useContext(AuthContext); 

    if (!authContext?.isLoggedIn) {
        return <Navigate to={'/admin/login'}/>;
      }

  return <Outlet />
}

export default PrivateRoute