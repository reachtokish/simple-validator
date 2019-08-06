import React from 'react';
import FormContext from './contexts';

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
        let { setValue } = this.context;
        setValue(e);
    }

    render() {
        let { type, placeholder, name, validators, ...rest} = this.props;
        return (
            <FormContext.Consumer>
                {(context) => {
                    let { values, errors } = context;
                    return (
                        <React.Fragment>
                            <input
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                value={values[name] || ""}
                                onChange={this.onChangeHanler.bind(this)}
                                {...rest}
                            />
                            {errors[name] && <span className="error">{errors[name]}</span>}
                        </React.Fragment>
                    )
                }}
            </FormContext.Consumer>
        );
    }
    
}

Input.contextType = FormContext;

export default Input;