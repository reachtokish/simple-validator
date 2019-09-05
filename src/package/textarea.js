import React from 'react';
import FormContext from './contexts';
import { validateField } from './utils';

class Textarea extends React.Component {

    componentDidMount() {
        this.setField();
        this.setValue();
    }

    setField() {
        let { name, validators, type } = this.props;
        let field = {
            [name]: {
                validators: validators,
                type: type
            }
        }
        this.context.setField(field);
    }

    setValue() {
        let { name, value } = this.props;
        let { setValue } = this.context;
        let valueObj = {
            target: {
                name,
                value: value ? value : ""
            }
        }
        setValue(valueObj);
    }

    onChangeHandler(e) {
        let { setValue, setError, fields, settings: {instantValidate} } = this.context;
        let fieldObj = fields[e.target.name];
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        setValue(e);
        if(instantValidate) {
            let error = validateField(fieldObj, fieldName, fieldValue).errors;
            setError(error);
        }
    }

    render() {
        let { type, placeholder, name, validators, value, ...rest} = this.props;
        return (
            <FormContext.Consumer>
                {(context) => {
                    let { values, errors } = context;
                    return (
                        <>
                            <textarea
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                value={values[name] || ""}
                                onChange={this.onChangeHandler.bind(this)}
                                {...rest}
                            ></textarea>
                            {errors[name] && <span className="error">{errors[name]}</span>}
                        </>
                    )
                }}
            </FormContext.Consumer>
        );
    }
    
}

Textarea.contextType = FormContext;

export default Textarea;