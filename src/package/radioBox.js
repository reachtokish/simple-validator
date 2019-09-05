import React from 'react';
import FormContext from './contexts';
import { validateField } from './utils';

class RadioBox extends React.Component {

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
        let { name, value, checked } = this.props;
        let { setValue } = this.context;
        let valueObj = {
            target: {
                name,
                value: checked ? value : ""
            }
        }
        setValue(valueObj);
    }

    onChangeHandler(e) {
        let { setValue, setError, fields, settings: {instantValidate} } = this.context;
        let { value } = this.props;
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
        let { type, placeholder, name, validators, checked, value, id, data, ...rest} = this.props;
        return (
            <FormContext.Consumer>
                {(context) => {
                    let { values, errors } = context;
                    return (
                        <>
                            {data.map(el => (
                                <React.Fragment key={el.id}>
                                    <input
                                        type="radio"
                                        name={name}
                                        id={"rad" + el.id}
                                        value={el.value}
                                        onChange={this.onChangeHandler.bind(this)}
                                    />
                                    <label htmlFor={"rad" + el.id}>{el.title}</label>
                                </React.Fragment>
                            ))}
                            {errors[name] && <span className="error">{errors[name]}</span>}
                        </>
                    )
                }}
            </FormContext.Consumer>
        )
    }

}

RadioBox.contextType = FormContext;

export default RadioBox;