import React from 'react';

export default class IconButton extends React.Component {

    render() {   
        if(this.props.hide) {
            return null;
        }      
        else  {
            return (
                <button className={"btn btn-" + this.props.style}
                    onClick={this.props.onClick}>
                    <i className={"fa fa-" + this.props.icon}></i>
                </button>
            );    
        }          
    }
}