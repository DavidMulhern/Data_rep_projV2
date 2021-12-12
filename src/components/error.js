// Import component
import { Component } from "react";

// Marking class for export
export class Error extends Component {

    // Display notifying user there was an issue trying to access the DB
    render() {
        return (
            <div>
                <h1>Captain, we have a problem!</h1>
                <img src="https://raw.githubusercontent.com/DavidMulhern/DataRep_Project/main/src/images/Oopsbutton.jpg"></img>
                <h2>Request could not be fulfilled</h2>
            </div>
        );
    }
}