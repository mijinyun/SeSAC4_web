import React, { Component } from 'react';

class ClassTestComponent extends Component {
    render() {

        const my_style = {
            backgroundColor : 'blue',
            color: 'orange',
            fontSize: '40px',
            padding: '12px'
        }

        return (
            <div style={my_style}>
                {this.props.name}
            </div>
        )
    }
}

export default ClassTestComponent;