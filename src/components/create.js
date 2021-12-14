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
            PicFile: null
        }
    }

    // When the value changes in the form, update the states
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

    // When an image gets uploaded, we re read it as abinary string and send it to the handle reader function 
    onChangeImage(e){
        let file = e.target.files[0]

        if (file){
            const reader = new FileReader();
            reader.onload = this.handleReader.bind(this)
            reader.readAsBinaryString(file)
        }
    }

    // handleReader converts the now binary string to base 64 and sets the state
    handleReader = (readerEvent) => {
        let binaryString = readerEvent.target.result
        this.setState({
            PicFile: btoa(binaryString, 'base64')
        })
    }

    onSubmit(e){
        // Stops button from being pressed multiple times
        e.preventDefault();

        // All statws now set since user input, creating a new event object
        const newEvent= {
            Title: this.state.Title,
            Message: this.state.Message,
            Date: this.state.Date,
            File: this.state.PicFile 
        }

        // posting new event object to DB
        axios.post('http://localhost:4000/api/events', newEvent) 
        .then(()=>{
            // once event is added and post is succesful, redirect to events page
            this.props.history.push('/read')
        })
        .catch((err)=>{
            console.log(err);
            this.props.history.push('/error')
        });
    }

    // clicking the button will fire the on submit event, in turn updating the states
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
                        <label>Upload Picture.</label> 
                        <input type="file" name="image" id="file" accept=".jpeg, .png, .jpg" className="form-control-file" onChange={this.onChangeImage}></input>
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

