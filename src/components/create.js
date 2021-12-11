// Import component
import { Component } from "react";

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

        this.state = {
            Title:'',
            Message:'',
            Date: '',
            PicFile: null
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

    // Handler will set state of PicFile from the event
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
             PicFile: event.target.files[0]
        })
    }

    fileUploadHnadler = () =>{

    }

    onSubmit(e){
        // Stops button from being pressed multiple times
        e.preventDefault();
        alert("Event: " + this.state.Title + " " + this.state.Message + " " + this.state.Date + " " + this.state.PicFile);
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
                        <label>Upload Picture</label>
                        <input type="file" className='form-control' onChange={this.fileSelectedHandler}></input>
                    </div>
                    <div className="form-group">
                        <input type='submit' value='Add event' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}

