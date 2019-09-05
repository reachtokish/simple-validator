import React from 'react';
import FormContext from './contexts';

class Wrapper extends React.Component {

    state = {
        fields: {},
        errors: {},
        values: {},
        settings: {}
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
                ...state.errors,
                ...error
            }
        }))
    }

    setSetting(setting) {
        this.setState(state => ({
            ...state,
            settings: {
                ...state.settings,
                ...setting
            }
        }))
    }

    render() {
        let { fields, errors, values, settings } = this.state;
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
                                    settings,
                                    setField: (field) => this.setField(field),
                                    setValue: (e) => this.setValue(e),
                                    setError: (error) => this.setError(error),
                                    setSetting: (setting) => this.setSetting(setting)
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