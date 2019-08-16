import React from 'react';
import FormContext from './contexts';
import { validateField } from './utils';

class Input extends React.Component {

    componentWillMount() {
        this.setField();
        this.setValue();
    }

    setField() {
        let { name, validators} = this.props;
        let field = {
            [name]: {
                validators: validators
            }
        }
        this.context.setField(field);
    }

    setValue() {
        let { name } = this.props;
        let { setValue } = this.context;
        let valueObj = {
            target: {
                name,
                value: ""
            }
        }
        setValue(valueObj);
    }

    onChangeHanler(e) {
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
        let { type, placeholder, name, validators, ...rest} = this.props;
        return (
            <FormContext.Consumer>
                {(context) => {
                    let { values, errors } = context;
                    return (
                        <>
                            <input
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                value={values[name] || ""}
                                onChange={this.onChangeHanler.bind(this)}
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

Input.contextType = FormContext;

export default Input;