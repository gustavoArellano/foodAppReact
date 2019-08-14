import React, {Component} from 'react';

class NavBar extends Component {
    constructor() {
        super() 
        this.State = {}
    }

    render() {
        return (
            <div id="navBar">
                <ul>
                    <a href="#"><li>Around Me?</li></a>
                    <a href="#"><li>Favorites?</li></a>
                    <a href="#"><li>Account?</li></a>
                    <a href="/"><li>Log Out</li></a>
                </ul>
            </div>
        )
    }
}

export default NavBar;