import React, { Component } from 'react'
import axios from 'axios';
import validator from 'validator'

export class EditInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            caption: this.props.caption,
            url: this.props.url
        }
    }

    submitHandler = (e) => {
        const { url } = this.state;

        if (validator.isURL(this.state.url)) {
            let URL = "http://sql12.freemysqlhosting.net:8081/memes/" + this.props.id
            axios.patch(URL, this.state)
                .then(response => {
                    console.log("successfully inserted" + response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            e.preventDefault()
            alert("Invalid url !!!")
        }

    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { url, caption, id } = this.props
        return (

            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <label>New Caption</label>
                    <input type="text" placeholder="Enter new Caption" value={this.state.caption} name="caption" onChange={this.changeHandler}></input>
                    <label>New url</label>
                    <input type="text" placeholder="Enter new Url" value={this.state.url} name="url" onChange={this.changeHandler}></input>
                    <br />
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditInfo
