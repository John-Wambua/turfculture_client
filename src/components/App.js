import React from "react";
import history from "../history";
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import UserDetails from "./authentication/UserDetails";
import ForgotPassword from "./authentication/ForgotPassword";
import ResetPassword from "./authentication/ResetPassword";
import FacilityList from "./facilities/FacilityList";
import FacilityDetails from "./facilities/FacilityDetails";

const App =()=>{
   
    return (
        <div>
            <Router history={history}>
                <Switch>
                    {/*Authentication*/}
                    <Route path={'/signup'} exact component={SignUp}/>
                    <Route path={'/login'} exact component={SignIn}/>
                    <Route path={'/me'} exact component={UserDetails}/>
                    <Route path={'/forgotPassword'} exact component={ForgotPassword}/>
                    <Route path={'/resetPassword'} exact component={ResetPassword}/>

                    {/*Facilities*/}
                    <Route path={'/'} exact component={FacilityList}/>
                    <Route path={'/facilities/:id'} exact component={FacilityDetails}/>
                </Switch>

            </Router>
        </div>
    )
}
export default App;