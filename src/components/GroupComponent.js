import React from 'react';
import DynamicComponent from "./DynamicComponent";
import ContainerBaseComponent from "./ContainerBaseComponent";
import ComponentService from "../services/ComponentService";

class GroupComponent extends ContainerBaseComponent {

    render() {
        let self = this;
        if (self.props.context === null) {
            return null;
        }
        return <div className="panel panel-info">
            <div className="panel-heading">
                <h2 className="panel-title">{self.props.context.label}</h2>
            </div>
            <div className="panel-body">
                {self.props.context.controls.map(function (control) {
                    let path = self.getPath(control.name);
                    return <DynamicComponent context={control} path={path} key={path} />
                })}
            </div>
        </div>
    }
}
ComponentService.addComponent('group', GroupComponent);
export default GroupComponent;
