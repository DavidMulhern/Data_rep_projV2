// Import component
import { Component } from "react";
// Import card bootstrap
import { Card } from "react-bootstrap";
// Using link which will be our edit button
import {Link} from 'react-router-dom'
// Marking class for export
export class MyItems extends Component {

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
                            <img src={this.props.entry.File} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.entry.Date}</p>
                                <p>{this.props.entry.Message}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Link to another component, set up so that the _id gets appended */}
                    <Link to={"/edit/" + this.props.entry._id} className="btn btn-dark">Edit</Link>
                </Card>
            </div>
        );
    }
}
