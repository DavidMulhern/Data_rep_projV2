// Import component
import { Component } from "react";
// Import axios, allowing the app to speak http client/server
import axios from 'axios';

// Marking class for export
export class Create extends Component {

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
        // PIC ?
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state = {
            Title:'',
            Message:'',
            Date: '',
            PicFile: ''
        }

    }

    // When the value changes in the form, update
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

    onChangeImage(e){
        this.setState({
            PicFile: e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    onSubmit(e){
        // Stops button from being pressed multiple times
        e.preventDefault();
        alert("Event: " + this.state.Title + " " + this.state.Message + " " + this.state.Date + " " + this.state.PicFile);

        const newEvent= {
            Title: this.state.Title,
            Message: this.state.Message,
            Date: this.state.Date,
        }

        // Trying to send my data via form data (allowing image data to also be passed)
        const formData = new FormData();
        formData.append("Title",this.state.Title);
        formData.append("Message",this.state.Message);
        formData.append("Date",this.state.Date);
        formData.append("eventImage",this.state.PicFile);

        axios.post('http://localhost:4000/api/events', formData) // newEvent removed
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            this.props.history.push('/error')
        });
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit} encType="multipart/form-data">
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
                    <br></br>
                    <div className="form-group">
                        <label htmlfor="file">Upload Picture.</label>
                        <input type="file" filename="eventImage" className="form-control-file" onChange={this.onChangeImage}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type='submit' value='Add event' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}

