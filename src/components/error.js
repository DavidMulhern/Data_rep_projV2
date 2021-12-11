// Import component
import { Component } from "react";

// Marking class for export
export class Error extends Component {

    // Display notifying user there was an issue trying to access the DB
    render() {
        return (
            <div>
                <h1>Captain, we have a problem!</h1>
                <img src="https://safetymanagementgroup.com/wp-content/uploads/2020/08/Oopsbutton.jpg"></img>
                <h2>Connection to database is invalid</h2>
            </div>
        );
    }
}