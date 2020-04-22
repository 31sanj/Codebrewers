import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    handleSubmit = (evt) => {
        
        evt.preventDefault();
        const form = new FormData(evt.target);

        let postData = {};
        
        for(let pair of form.entries()) {
            postData[pair[0]] = pair[1];
        }
        
        console.log(postData)
        
        const {email, password} = postData;

        if(email && password) {
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("userdata", JSON.stringify(postData))
            this.props.history.push("/");
        }
    }


    render() { 
        return (
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group"> 
                            <label className="text-muted">Username</label>
                            <input 
                                name="username" 
                                type="text" 
                                className="form-control"  
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Email address</label>
                            <input 
                                name="email" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Password</label>
                            <input 
                                name="password" 
                                type="password" 
                                className="form-control"
                            />
                        </div>
                        <button 
                            className="btn btn-primary">
                                Submit
                        </button>
                    </form> 
                </div>
        )
    }
}
 
export default Login;