import React from 'react';
import Form from './package/Form';
import Input from './package/Input';
import Wrapper from './package/wrapper';
import CheckBox from './package/checkBox';
import RadioBox from './package/radioBox';
import Textarea from './package/textarea';
import Select from './package/select';

class App extends React.Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <Form
                        instantValidate={true}
                    >
                        <label>Check one of me if you can</label><br />
                        <RadioBox
                            type="radio"
                            name="checkOneOfMe"
                            validators={['isRequired']}
                            value="One"
                            id="one"
                            data={
                                [{
                                    id: 1,
                                    title: "One",
                                    value: "one"
                                }, {
                                    id: 2,
                                    title: "Two",
                                    value: "two"
                                }, {
                                    id: 3,
                                    title: "Three",
                                    value: "three"
                                }]
                            }
                        /><br /><br />
                        <label>Check me if you can</label><br />
                        <CheckBox
                            type="checkbox"
                            name="checkMe"
                            validators={['isChecked']}
                        /><br /><br />
                        <label>Name</label><br />
                        <Input
                            type="text"
                            placeholder="Enter Name"
                            className="text_input"
                            name="name"
                            validators={['isRequired', 'min:5']}
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
                        <label>Phone No.</label><br />
                        <Textarea
                            type="text"
                            placeholder="Enter Message"
                            className="textarea_input"
                            name="message"
                            validators={['isRequired']}
                        /><br /><br />
                        <label>Gender</label><br />
                        <Select
                            type="select"
                            placeholder="Choose gender"
                            className="text_input"
                            name="gender"
                            validators={['isRequired']}
                            options={
                                [{
                                    id: 1,
                                    value: "Female"
                                }, {
                                    id: 2,
                                    value: "Male"
                                }]
                            }
                        /><br /><br />
                        <button>Submit</button>
                    </Form>
                </Wrapper>
            </div>
        );
    }
}

export default App;