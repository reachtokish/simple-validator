import React from 'react';
import FormContext from './FormContext';

class Input extends React.Component {
    componentDidMount() {
        this.buildState();
    }

    buildState() {
        let { name, validators } = this.props;
        let { state, buildState } = this.context;
        buildState("formFields", name, "");
        buildState("form", name, { validations: validators });
    }

    render() {
        let { type, placeholder, ...rest } = this.props;
        return (
            <input
                type={type}
                placeholder={placeholder}
                {...rest}
            />
        );
    }
}

Input.contextType = FormContext;

export default Input;