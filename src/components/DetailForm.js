import React, { Component } from 'react'
import axios from 'axios'
import validator from 'validator'
import 'reactstrap';
import './DetailForm.css'

class DetailForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            caption: '',
            url: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        const { url } = this.state;
        
        if (validator.isURL(url)) {
            axios.post('http://sql12.freemysqlhosting.net:8081/memes', this.state)
                .then(response => {
                    if (response.data == "409 Duplicate Request")
                        alert(response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            alert("Invalid url !!!")
            e.preventDefault()
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <label>Meme Owner</label>
                    <input type="text" placeholder="Enter Your Full Name" name="name" value={this.state.name} onChange={this.changeHandler} />
                    <label>Caption</label>
                    <input type="text" placeholder="Be Creative With Caption" name="caption" value={this.state.caption} onChange={this.changeHandler} />
                    <label>Meme URL</label>
                    <input type="text" placeholder="Enter URL of your meme here" name="url" value={this.state.url} onChange={this.changeHandler} />
                    <br />
                    <button className="btn btn-success" type="submit">Submit Meme</button>
                </form>
            </div>
        )
    }
}

export default DetailForm
