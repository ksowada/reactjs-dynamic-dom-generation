
import React, { Component } from 'react';
/*eslint-disable */
import DefaultComponent from "./DefaultComponent"
import TableComponent from "./TableComponent"
import OutputComponent from "./OutputComponent"
import SwitchComponent from "./SwitchComponent"
import RangeComponent from "./RangeComponent"
import GroupComponent from "./GroupComponent"
/*eslint-enable */
import ComponentService from "../services/ComponentService";

class DynamicComponent extends Component{
    render() {
        if (this.props.context === null) {
            return null;
        }
        this.component = ComponentService.getComponent(this.props.context.ui);
        return  <this.component context={this.props.context} path={this.props.path}/>
    }
}

export default DynamicComponent;
