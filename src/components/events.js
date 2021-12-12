// Import component
import { Component } from "react";
import { MyItems } from "./myItems";

// Marking class for export
export class Events extends Component {

    // render - display
    render() {
        // Using map funtion to obtain contents of events, which holds the state.movies. Using an anonymous function
        // calling each item in the collection and assign to - entry
        return this.props.events.map((entry)=>{

            // Now that events has been mapped into entry, we return entry to MyItems in order for that class to display contents
            // Passing ReloadAll from read to here and now we keep passing 
            return <MyItems entry={entry} ReloadAll={this.props.ReloadAll}></MyItems>

        })
    }
}

