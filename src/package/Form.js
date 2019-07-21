import React from 'react';
import FormContext from './FormContext';

class Form extends React.Component {
    // states for whole app
    state = {
        formFields: {},
        formErrors: {},
        form: {}
    }

    render() {
        return (
            <FormContext.Provider
                value={{
                    state: this.state,
                    changeHandler: (e) => {
                        this.handleChange(e);
                    },
                    buildState: (stateName, nestedStateName, value) => {
                        this.setState(prevState => ({
                            ...prevState,
                            [stateName]: {
                                ...prevState[stateName],
                                [nestedStateName]: value
                            }
                        }))
                    }
                }}
            >
                <table width="100%" border="1" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <pre>{JSON.stringify(this.state, undefined, 4)}</pre>
                            </td>
                            <td>
                                <form>
                                    {this.props.children}
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </FormContext.Provider>
        );
    }
}

export default Form;
