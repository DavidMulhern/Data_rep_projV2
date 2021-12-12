// Import component
import { Component } from "react";

// Marking class for export
export class Content extends Component {

    // render - display
    render() {
        return (   
            <div>
                <h1>Hello and welcome to your own event picture book.</h1>
                <p>Keeping memories of your cherished events at the click of a button</p>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

