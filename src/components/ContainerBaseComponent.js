
import {Component} from 'react';

class ContainerBaseComponent extends Component {
    getPath(name) {
        if (this.props.path === undefined) {
            return name;
        }
        return this.props.path + '.' + name;
    }
}

export default ContainerBaseComponent;
