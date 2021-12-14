// Import component
import { Component } from "react";
// Import events component
import { Events } from "./events";
// Importing axios, allowing front end to talk http
import axios from 'axios';
// Marking class for export
export class Read extends Component {

    // Used to bind the reload so when a delete happens we can target the method 
    // As it is a grandchild of this class calling it, we need to pass it down
    constructor(){
        super()
        this.ReloadAll = this.ReloadAll.bind(this)
    }

    state = {
        contents: [],
    };

    // This gets called every time component is accessed
    componentDidMount(){
        // Using axios to make a HTTP promise (async)
        axios.get('http://localhost:4000/api/events')
        .then((response)=>{
            // the above contents state variable will be populated by the response aka res
            this.setState({contents: response.data})

        })
        .catch((err)=>{
            // Should there be an issue with the axios get request, we get sent to the error component
            this.props.history.push('/error')
        });
    }

    // Reload method (fired after delete)
    ReloadAll(){
        axios.get('http://localhost:4000/api/events')
        .then((response)=>{
            // the above contents state variable will be populated by the response aka res
            this.setState({contents: response.data})

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
                <h1><font face="Garamond"><b>Life events</b></font></h1>
                {/* passing the object events (The above state contents) to the Events class in events.js*/}
                {/* Passing down the reload method - ReloadAll*/}
                <Events events={this.state.contents} ReloadAll={this.ReloadAll}></Events>
            </div>
        );
    }
}

