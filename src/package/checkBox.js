import React from 'react';
import FormContext from './contexts';
import { validateField } from './utils';

class CheckBox extends React.Component {

    componentDidMount() {
        this.setField();
        this.setValue();
    }

    setField() {
        let { name, type, validators } = this.props;
        let field = {
            [name]: {
                validators: validators,
                type: type
            }
        }
        this.context.setField(field);
    }

    setValue() {
        let { name, checked } = this.props;
        let { setValue } = this.context;
        let valueObj = {
            target: {
                name,
                value: checked ? checked : false
            }
        }
        setValue(valueObj);
    }

    onChangeHandler(e) {
        let { setValue, setError, fields, settings: {instantValidate} } = this.context;
        let fieldObj = fields[e.target.name];
        let fieldName = e.target.name;
        let fieldValue = e.target.checked;
        setValue({
            target: {
                value: fieldValue,
                name: fieldName
            }
        });
        if(instantValidate) {
            let error = validateField(fieldObj, fieldName, fieldValue).errors;
            setError(error);
        }
    }
    
    render() {
        let { type, placeholder, name, validators, checked, ...rest} = this.props;
        return (
            <FormContext.Consumer>
                {(context) => {
                    let { values, errors } = context;
                    return (
                        <>
                            <input
                                type="checkbox"
                                checked={values[name] || false}
                                name={name}
                                onChange={this.onChangeHandler.bind(this)}
                            />
                            {errors[name] && <span className="error">{errors[name]}</span>}
                        </>
                    )
                }}
            </FormContext.Consumer>
        )
    }

}

CheckBox.contextType = FormContext;

export default CheckBox;