import React, { Component } from 'react'
import EditInfo from './EditInfo'
import Popup from './Popup'
import image from './NotFound.png'

class MemeView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            buttonPopup: false,
            src: this.props.url,
            errored: false
        }
    }

    setPopup = (value) => {
        this.setState({
            buttonPopup: value
        })
    }

    onError = () => {
        if (!this.state.errored) {
            this.setState({
                src: image,
                errored: true
            })
        }
    }

    render() {
        const { id, name, caption, url } = this.props

        return (
            <div className="image-container">
                <div className="text-img">
                    Name : {name}
                </div>
                <div className="text-img">
                    Caption : {caption}
                </div>
                <div className="img-box">
                    <img src={this.state.src} alt="not found" onError={this.onError}></img>
                </div>
                <button className="btn btn-sm btn-primary " onClick={() => this.setPopup(true)}>Edit Info</button>
                <Popup trigger={this.state.buttonPopup} setTrigger={this.setPopup}>
                    <EditInfo caption={caption} url={url} id={id} />
                </Popup>
            </div>
        )
    }
}

export default MemeView
