import React from 'react';
import FormContext from './contexts';
import { validateField } from './utils';

class RadioInput extends React.Component {

    inputRef = React.createRef();

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
        let { current } = this.inputRef;
        let { name, value } = this.props;
        let { setValue } = this.context;
        let valueObj = {
            target: {
                name,
                value: current.checked
            }
        }
        setValue(valueObj);
    }

    onChangeHandler(e) {
        let { setValue, setError, fields, settings: {instantValidate} } = this.context;
        let fieldObj = fields[e.target.name];
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let checked = e.target.checked;
        let value = {
            target: {
                name: fieldName,
                value: checked
            }
        }
        setValue(value);
        if(instantValidate) {
            let error = validateField(fieldObj, fieldName, checked).errors;
            setError(error);
        }
    }

    render() {
        let { type, placeholder, name, validators, value, checked, ...rest} = this.props;
        return (
            <FormContext.Consumer>
                {(context) => {
                    let { values, errors } = context;
                    return (
                        <>
                            <input
                                ref={this.inputRef}
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                checked={values[name] || ""}
                                onChange={this.onChangeHandler.bind(this)}
                                {...rest}
                            />
                            {errors[name] && <span className="error">{errors[name]}</span>}
                        </>
                    )
                }}
            </FormContext.Consumer>
        );
    }
    
}

RadioInput.contextType = FormContext;

export default RadioInput;