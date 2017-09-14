import React, { Component } from 'react';
import ComponentService from "../services/ComponentService";

class DefaultComponent extends Component{
    render() {
        return  <div>{this.props.context.ui}: {this.props.context.label}</div>
    }
}
ComponentService.addDefaultComponent(DefaultComponent);
