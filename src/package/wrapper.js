import React from 'react';
import FormContext from './contexts';

class Wrapper extends React.Component {

    // states for whole app
    state = {
        fields: {},
        errors: {},
        values: {}
    }

    setField(field) {
        this.setState(state => ({
            ...state,
            fields: {
                ...state.fields,
                ...field
            }
        }))
    }

    setValue(e) {
        let { name, value } = e.target;
        this.setState(state => ({
            ...state,
            values: {
                ...state.values,
                [name]: value
            }
        }))
    }

    setError(error) {
        this.setState(state => ({
            ...state,
            errors: {
                ...error
            }
        }))
    }

    render() {
        let { fields, errors, values } = this.state;
        return (
            <table width="100%" border="1" cellPadding="10" cellSpacing="0">
                <tbody>
                    <tr>
                        <td>
                            <pre>{JSON.stringify(this.state, undefined, 4)}</pre>
                        </td>
                        <td>
                            <FormContext.Provider
                                value={{
                                    fields,
                                    errors,
                                    values,
                                    setField: (field) => this.setField(field),
                                    setValue: (e) => this.setValue(e),
                                    setError: (error) => this.setError(error)
                                }}
                            >
                                {this.props.children}
                            </FormContext.Provider>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Wrapper;