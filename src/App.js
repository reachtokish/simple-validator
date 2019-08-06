import React from 'react';
import Form from './package/Form';
import Input from './package/Input';
import Wrapper from './package/wrapper';

function App() {
    return (
        <div>
            <Wrapper>
                <Form>
                    <label>Name</label><br />
                    <Input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        validators={['isRequired', 'min:5']}
                    /><br /><br />
                    <label>Email</label><br />
                    <Input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        validators={['isRequired', 'isEmail']}
                    /><br /><br />
                    <label>Phone No.</label><br />
                    <Input
                        type="text"
                        placeholder="Enter Phone No."
                        name="phoneNo"
                        validators={['isRequired', 'isExact:10', 'isNumber']}
                        data-hey="1"
                    /><br /><br />
                    <button>Submit</button>
                </Form>
            </Wrapper>
        </div>
    );
}

export default App;