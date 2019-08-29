import React from 'react';
import Form from './package/Form';
import Input from './package/Input';
import Wrapper from './package/wrapper';
import CheckInput from './package/CheckInput';
import RadioInput from './package/RadioInput';

class App extends React.Component {
    render() {
        return (
            <div>
                {/**
                * TODO:
                * - [WRAPPER] need to be removed and place context somewhere inside
                *   form or introduce higher order component
                */}
                <Wrapper>
                    <Form
                        instantValidate={true}
                    >
                        {/* <label>Gender</label><br />
                        <label htmlFor="male">Male</label>
                        <RadioInput
                            id="male"
                            type="radio"
                            name="myRadio"
                            value="male"
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor="female">Female</label>
                        <RadioInput
                            id="female"
                            type="radio"
                            name="myRadio"
                            value="female"
                        />
                        <br /><br /> */}
                        <label>My checkbox</label><br />
                        <CheckInput
                            type="checkbox"
                            name="myCheckbox"
                            validators={['isChecked']}
                        />
                        <br /><br />
                        <label>Name</label><br />
                        <Input
                            type="text"
                            placeholder="Enter Name"
                            className="text_input"
                            name="name"
                            validators={['isRequired', 'min:5']}
                            value="Kishore"
                        /><br /><br />
                        <label>Email</label><br />
                        <Input
                            type="text"
                            placeholder="Enter Email"
                            className="text_input"
                            name="email"
                            validators={['isRequired', 'isEmail']}
                        /><br /><br />
                        <label>Phone No.</label><br />
                        <Input
                            type="text"
                            placeholder="Enter Phone No."
                            className="text_input"
                            name="phoneNo"
                            validators={['isRequired', 'isExact:10', 'isNumber']}
                        /><br /><br />
                        <button>Submit</button>
                    </Form>
                </Wrapper>
            </div>
        );
    }
}

export default App;