import React, {Component} from 'react';
import '../static/css/Home.css';
import HomeBody from './HomeBody'
import NavBar from './NavBar'


class Home extends Component {
    constructor() {
        super() 
        this.state = {}
    }

    render() {
        return (
            <div>
                <HomeBody />
                <NavBar />
            </div>
        )
    }
}

export default Home;