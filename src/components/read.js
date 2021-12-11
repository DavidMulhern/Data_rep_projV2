// Import component
import { Component } from "react";
// Import events component
import { Events } from "./events";
// Importing axios, allowing front end to talk http
import axios from 'axios';

// Marking class for export
export class Read extends Component {

    state = {
        contents: [],
    };

    // This gets called every time component is accessed
    componentDidMount(){

        // Using axios to make a HTTP promise (async)
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response)=>{
            // the above contents state variable will be populated by the response aka res
            this.setState({contents: response.data.movies}) // movies here is the array name in the JSON blob, *** FUTURE DAVE ***

        })
        .catch((err)=>{
            // Should there be an issue with the axios get request, we get sent to the error component
            this.props.history.push('/error')
        });

    }

    // render - display
    render() {
        return (
            <div>
                <h1>This is the read component</h1>
                {/* passing the object events (The above state contents) to the Events class in events.js*/}
                <Events events={this.state.contents}></Events>
            </div>
        );
    }
}

