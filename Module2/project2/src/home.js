import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Home extends Component {
    

    handleLogout = () => {
        localStorage.setItem("isLoggedIn" , false);
         this.props.history.push("/login");       
    }

    render() { 

        const isLoggedIn = localStorage.getItem("isLoggedIn");
        let userData = localStorage.getItem("userdata");
        userData = JSON.parse(userData)
        console.log(isLoggedIn)
        console.log(userData)
        if(isLoggedIn) {

            return ( 
                <div>
                <h1>Welcome to Homepage </h1>
                <p>{userData.username}</p>
                <button type="button" onClick={this.handleLogout}>Logout</button>
            </div>)
        }
        else {
            return <Redirect to="/login" /> 
        }
    }
}
 
export default Home;