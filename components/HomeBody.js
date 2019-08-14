import React, {Component} from 'react';

class HomeBody extends Component {
    constructor() {
        super();
        this.State = {}
    }

    render() {
        return (
            
            <div id="bodyContainer">
                <h3>Let's find a taco spot!</h3>

                {/* <form action="#"> */}
                    {/* <input type="text" placeholder="Zip Code, City, State, Current Location"> */}
                    <button type="submit" class="btn btn-danger btn-sm register">Search 🌮</button>
                {/* </form> */}

                <h4>Or</h4>

                <a href="#"><button type="button" class="btn btn-danger btn-sm register">Around Me ?<i class="fas fa-map-marked-alt"></i></button></a>
            </div>
        )
    }
}

export default HomeBody;