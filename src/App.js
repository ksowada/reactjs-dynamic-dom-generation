import React, {Component} from 'react';
import './App.css';
import DynamicComponent from "./components/DynamicComponent";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: null
        };
    }

    componentDidMount() {
        axios.get('example-ui.json')
            .then(res => {
                this.setState({controls: res.data.Controls});
            });
    }

    render() {
        let self = this;
        if (self.state.controls === null) {
            return null;
        }
        return (
            <div>
                <div className="center">
                    <h1>ReactJs Data Driven DOM Content Demo</h1>
                </div>
                <div>
                    {self.state.controls.map(function (control) {
                        return <DynamicComponent context={control} path={control.name} key={control.name}/>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
