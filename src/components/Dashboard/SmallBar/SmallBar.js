import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../../../App";
import smallBg from "../../../image/logo.png";
import BookPage from "../../BookPage/BookPage";
import TripBooking from "../../Home/TripBooking/TripBooking";
import NotFound from "../../NotFound/NotFound";
import Footer from "../../Shared/Footer/Footer";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddReview from "../AddReview/AddReview";
import AddService from "../AddService/AddService";
import BookingList from "../BookingList/BookingList";
import ManageAdmin from "../ManageAdmin/ManageAdmin";
import ManageService from "../ManageService/ManageService";
import "./SmallBar.css";
import {
  faCopyright,
  faBookmark,
  faList,
  faUsersCog,
  faPlus,
  faTasks,
  faSignOutAlt,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeElement from "../../Home/HomeElement/HomeElement";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const auth = getAuth();
  const history = useHistory();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        setLoggedInUser({});
        history.push("/home")
      })
      .catch(error => {
        console.log(error);
      });
  };

  const [isAdmin, setIsAdmin] = useState([]);
  console.log("isAmin", isAdmin.length);
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const decodedToken = jwt_decode(storedToken);
    if (decodedToken) {
      const userEmail = decodedToken.email;
      fetch(
        `https://travel-management-service.herokuapp.com/getAdmin/3?email=${userEmail}`
      )
        .then(res => res.json())
        .then(success => setIsAdmin(success));
    }
  }, []);

  const drawer = (
    <div className="smallbar-side-bg">
      <div className="smallbar-icon">
        <img style={{ height: "63px" }} src={smallBg} alt="" />
      </div>
      <Divider />
      <div className=" smallbar-menu  pt-3">
        <li className="smallbar-link">
          {" "}
          <FontAwesomeIcon icon={faCopyright} />{" "}
          <Link className="smallbar-link" to="/account/book">
            {" "}
            Book
          </Link>
        </li>
        <li className="smallbar-link">
          {" "}
          <FontAwesomeIcon icon={faList} />{" "}
          <Link className="smallbar-link" to="/account/bookingList">
            {" "}
            Booking List{" "}
          </Link>
        </li>
        <li className="smallbar-link">
          {" "}
          <FontAwesomeIcon icon={faComment} />{" "}
          <Link className="smallbar-link" to="/account/addReview">
            {" "}
            Add Review
          </Link>
        </li>
        {isAdmin.length > 0 && (
          <div>
            <li className="smallbar-link">
              {" "}
              <FontAwesomeIcon icon={faUsersCog} />{" "}
              <Link className="smallbar-link" to="/account/addAdmin">
                {" "}
                Add Admin
              </Link>
            </li>
            <li className="smallbar-link">
              {" "}
              <FontAwesomeIcon icon={faPlus} />{" "}
              <Link className="smallbar-link" to="/account/addService">
                {" "}
                Add Service
              </Link>
            </li>
            <li className="smallbar-link">
              {" "}
              <FontAwesomeIcon icon={faTasks} />{" "}
              <Link className="smallbar-link" to="/account/manageService">
                {" "}
                Manage Service
              </Link>
            </li>
            <li className="smallbar-link">
              {" "}
              <FontAwesomeIcon icon={faBookmark} />{" "}
              <Link className="smallbar-link" to="/account/manageAdmin">
                {" "}
                Manage admin
              </Link>
            </li>
          </div>
        )}
      </div>
      <div className="logout">
        <li
          onClick={handleSignOut}
          style={{ listStyle: "none", paddingLeft: "12px" }}
        >
          {" "}
          <FontAwesomeIcon icon={faSignOutAlt} />
          <Link className="smallbar-link" to="">
            {" "}
            Log Out{" "}
          </Link>
        </li>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          backgroud="orange"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              My Account
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <div className="p-3">
            <Toolbar />
            <Switch>
              <Route path="/account/book">
                <BookPage />
              </Route>
               <Route path="/home">
               <HomeElement></HomeElement>
             </Route>
              <Route path="/tripBook/:id">
                <TripBooking />
              </Route>
              <Route path="/account/bookingList">
                <BookingList />
              </Route>
              <Route exact path="/account">
                <BookingList />
              </Route>
              <Route path="/account/addReview">
                <AddReview />
              </Route>
              <Route path="/account/addAdmin">
                <AddAdmin />
              </Route>
              <Route path="/account/addService">
                <AddService />
              </Route>
              <Route path="/account/manageService">
                <ManageService />
              </Route>
              <Route path="/account/manageAdmin">
                <ManageAdmin />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Box className="m-0 p-0">
            <Footer />
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
