import axios from "axios";
import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
        };
    }
    getUser = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({
                user: response.data,
            });
            // console.log(response.data);
        });
    }
    componentDidMount(){
        this.getUser();
    }
    render() {
        console.log('User data', this.state.user);
        return (
            <div>
                <h1>Saya Bisa di home</h1>
            </div>
        );
    }
}
export default Home;