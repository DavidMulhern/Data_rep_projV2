// Import component
import { Component } from "react";
// Import axios, allowing the app to speak http client/server
import axios from 'axios';

// Marking class for export
export class Edit extends Component {

    // Constructor for fields, initially empty values
    constructor(){
        super();

        // bind the onSubmit onto this instance of the class
        this.onSubmit = this.onSubmit.bind(this);
        // Again for the onChangeTitle event
        this.onChangeTitle = this.onChangeTitle.bind(this);
        // Again for the onChangeMessage event
        this.onChangeMessage = this.onChangeMessage.bind(this);
        // Again for the onChangeDate event
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            Title:'',
            Message:'',
            Date: ''
        }
    }

    // Lifecycle hook to pull the id out of the URL
    componentDidMount(){
        axios.get('http://localhost:4000/api/events/' + this.props.match.params.id)
        .then(response=>{
            // setting the state with the data returned (populating the fields)
            this.setState({
                _id: response.data._id,
                Title: response.data.Title,
                Message: response.data.Message,
                Date: response.data.Date,
            })
        })
        .catch((err)=>{
            console.log(err)
            this.props.history.push('/error');
        })
    }

    // When the value changes in the form, update the state(s)
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        })
    }

    onChangeMessage(e){
        this.setState({
            Message: e.target.value
        })
    }

    onChangeDate(e){
        this.setState({
            Date: e.target.value
        })
    }

    onSubmit(e){
        // Stops button from being pressed multiple times
        e.preventDefault();

        const editEvent= {
            Title: this.state.Title,
            Message: this.state.Message,
            Date: this.state.Date,
            File: this.state.PicFile,
            _id: this.state._id
        }

        // Edit a record
        axios.put('http://localhost:4000/api/events/' + this.state._id, editEvent)
        .then(response =>{
             // once event is added and post is succesful, redirect to events page
             this.props.history.push('/read')
        })
        .catch((err)=>{
            console.log(err);
            this.props.history.push('/error')
        })
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Title</label>
                        <input type="text" className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Message</label>
                        <input type="text" className='form-control' value={this.state.Message} onChange={this.onChangeMessage}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Date</label>
                        <input type="text" className='form-control' value={this.state.Date} onChange={this.onChangeDate}></input>
                    </div>
                    <div className="form-group">
                        <input type='submit' value='Edit event' className='btn btn-dark'></input>
                    </div>
                </form>
            </div>
        );
    }
}

