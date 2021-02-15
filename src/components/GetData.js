import React, { Component } from 'react'
import axios from 'axios'
import MemeView from './MemeView'

class GetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errMsg: ""
        }
    }


    componentDidMount() {
        axios.get('http://sql12.freemysqlhosting.net:8081/memes')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    errorMsg: "error retrieving data"
                })
            })
    }

    render() {

        const { posts, errMsg } = this.state;

        return (
            <div>
                {
                    { errMsg } ?
                        <div>{errMsg}</div> :
                        null
                }
                {
                    posts.length ?
                        posts.map(post => <MemeView key={post.id} id={post.id} name={post.name} url={post.url} caption={post.caption} />) :
                        null
                }
            </div>
        )
    }
}

export default GetData
