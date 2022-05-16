import React, { useContext } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
        const tokenTime = () =>{
        const storedToken = sessionStorage.getItem("token");
        if (storedToken){
        let decodedData = jwt_decode(storedToken, { header: true });
        let expirationDate = decodedData.exp;
            var current_time = Date.now() / 1000;
            if(expirationDate < current_time)
            {
               if(storedToken){
                   sessionStorage.removeItem("token");
                 }
            }
        }
    }
    tokenTime();

    const isLoggedIn = () => {
       const token= sessionStorage.getItem('token');
       if(!token){
           return false
       }
       const decodedToken = jwt_decode(token);
       const currentTime = new Date().getTime() /1000;
       return decodedToken.exp > currentTime;
    }


    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}pll
          />
        )
      }
    />
    );
};

export default PrivateRoute;