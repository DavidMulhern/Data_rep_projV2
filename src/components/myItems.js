// Import component
import { Component } from "react";
// Import card bootstrap
import { Card } from "react-bootstrap";
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
                            <img src={this.props.entry.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.entry.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
