// Import component
import { Component } from "react";
// Import card bootstrap
import { Card } from "react-bootstrap";
// Using link which will be our edit button
import { Link } from 'react-router-dom'
// bootstrap buttons 
import Button from 'react-bootstrap/Button'
// Importing axios in order to use the delete method 
import axios from 'axios'

// Marking class for export
export class MyItems extends Component {

    constructor() {
        super();
        this.DeleteEntry = this.DeleteEntry.bind(this); // making an instance of this delete
    }

    // Delete method
    DeleteEntry(e) {
        // Stops multiple deletes happening
        e.preventDefault();

        axios.delete('http://localhost:4000/api/events/' + this.props.entry._id)
            .then(() => {
                // ReloadAll has been chained from events.js -> read.js and we can now execute it here!
                this.props.ReloadAll();
            })
            .catch((err) => {
                console.log(err);
                this.props.history.push('/error')
            })
    }

    // render - display
    render() {
        return (
            <div>
                {/* read.js sends the state contents via events variable -> 
                event.js maps contents and sends that via entry variable -> 
                myItens where we display */}
                <Card>
                    <Card.Header>{this.props.entry.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* Rendering the base64 image */}
                            <img src={"data:image/png;base64, " + this.props.entry.File} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.entry.Date}</p>
                                <p>{this.props.entry.Message}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Link to another component, set up so that the _id gets appended */}
                    <Link to={"/edit/" + this.props.entry._id} className="btn btn-secondary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteEntry}>Delete</Button>
                </Card>
            </div>
        );
    }
}
