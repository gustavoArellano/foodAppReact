import React, {Component} from 'react';
import '../static/css/App.css';

class Main extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div id="container">
                <h6 className="vendorNav">If you are a vendor, click <a className="vendorLink" href="vendorIndex.html">here</a>!</h6>

                <h2>Taco Truck Locator</h2>

                <a href="/Login"><button type="button" className="btn btn-outline-danger login">Login <span role="img" aria-label="taco">🌮</span></button></a>
                
                <a href="/SignUp"><button type="button" className="btn btn-outline-danger register">Sign Up <span role="img" aria-label="taco">🌮</span></button></a>
            </div>
        )
    }
}

export default Main;