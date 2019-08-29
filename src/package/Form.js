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

    componentDidMount() {
        let { setSetting } = this.context;
        let { instantValidate } = this.props;
        setSetting({
            instantValidate
        })
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

Form.defaultProps = {
    instantValidate: false
}

export default Form;