import React from 'react';
import FormContext from './contexts';
import { validate } from './utils';

class Form extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        let { fields, values, setError } = this.context;
        let validateResult = validate(fields, values);
        setError(validateResult.errors);
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit.bind(this)}
            >
                {this.props.children}
            </form>
        );
    }
}

Form.contextType = FormContext;

export default Form;