import React, {Component} from 'react';
import '../static/css/SignUp.css';


class SignUp extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div id="container">
                <h6 className="vendorNav">If you are a vendor, click <a className="vendorLink" href="vendorIndex.html">here</a>!</h6>

                <h5>Taco Truck Locator</h5>

                <h3>Sign Up</h3>

                <a href="/"><button type="submit" className="btn btn-danger btn-sm register">Go Back</button></a>

                <form action="/Home">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit" class="btn btn-outline-danger register">Sign Up</button>
                </form>

                <p>If you already have an account click <a className="redirectReg" href="/Login">HERE</a>!</p>
                
            </div>
        )
    }
}

export default SignUp;
