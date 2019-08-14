import React, {Component} from 'react';
import '../static/css/Login.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div id="container">
                <h6 className="vendorNav">If you are a vendor, click <a className="vendorLink" href="vendorIndex.html">here</a>!</h6>

                <h5>Taco Truck Locator</h5>

                <h3>Login</h3>

                <a href="/"><button type="submit" className="btn btn-danger btn-sm register">Go Back</button></a>

                <form action="/Home">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" class="btn btn-outline-danger register">Login</button>
                </form>

                <p>If you don't have an account click <a className="redirectReg" href="/SignUp">HERE</a>!</p>
                
            </div>
        )
    }
}

export default Login;