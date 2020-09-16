import React from "react";
import history from "../history";
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import UserDetails from "./Authentication/UserDetails";
import ForgotPassword from "./Authentication/ForgotPassword";
import ResetPassword from "./Authentication/ResetPassword";

const App =()=>{
   
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path={'/signup'} exact component={SignUp}/>
                    <Route path={'/login'} exact component={SignIn}/>
                    <Route path={'/me'} exact component={UserDetails}/>
                    <Route path={'/forgotPassword'} exact component={ForgotPassword}/>
                    <Route path={'/resetPassword'} exact component={ResetPassword}/>
                </Switch>

            </Router>
        </div>
    )
}
export default App;