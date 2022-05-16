import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeElement from './components/Home/HomeElement/HomeElement';
import NotFound from './components/NotFound/NotFound';
import SmallBar from './components/Dashboard/SmallBar/SmallBar';
import TripBooking from './components/Home/TripBooking/TripBooking';
import TripBookingUserInfo from './components/Home/TripBookingUserInfo/TripBookingUserInfo';
import Loading from './components/Loading/Loading';
import BookPage from './components/BookPage/BookPage';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Contact from './components/Home/Contact/Contact';


export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

  return (
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <Router>
           <Switch>
             <Route path="/home">
               <HomeElement></HomeElement>
             </Route>
             <Route path="/login">
               <Login></Login>
             </Route>
             <Route exact path="/">
               <HomeElement></HomeElement>
             </Route>
             <PrivateRoute path="/account">
              <SmallBar></SmallBar>
             </PrivateRoute>
             <Route path="/bookPage">
               <Navbar></Navbar>
                <BookPage></BookPage>
                <Footer></Footer>
             </Route>
              <Route path="/contactPage">
               <Navbar></Navbar>
                <Contact></Contact>
                <Footer></Footer>
             </Route>
              <Route path="/loading">
              <Loading></Loading>
             </Route>
             <PrivateRoute path="/tripBook/:id">
              <TripBooking></TripBooking>
             </PrivateRoute>
              <Route path="/tripBookingUserInfo">
              <TripBookingUserInfo></TripBookingUserInfo>
             </Route>
             <Route path="*">
               <NotFound></NotFound>
             </Route>
           </Switch>
         </Router>
   </UserContext.Provider>
  );
}

export default App;
