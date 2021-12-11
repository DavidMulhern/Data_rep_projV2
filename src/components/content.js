// Import component
import { Component } from "react";

// Marking class for export
export class Content extends Component {

    // render - display
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

