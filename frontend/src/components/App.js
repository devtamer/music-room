import React, { Component } from 'react'
import { render } from "react-dom"
import HomePage from './HomePage';


// update constructer and potentially entire class to functional component later on?
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="center">
                <HomePage />
            </div>
        )

    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)