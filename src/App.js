import React from 'react';
import Form from './package/Form';
import Input from './package/Input';

function App() {
    return (
        <div>
            <Form>
                <label>Name</label><br />
                <Input
                    type="text"
                    placeholder="Enter Name"
                /><br /><br />
                <label>Email</label><br />
                <Input
                    type="text"
                    placeholder="Enter Email"
                /><br /><br />
                <label>Phone No.</label><br />
                <Input
                    type="text"
                    placeholder="Enter Phone No."
                /><br /><br />
                <button>Submit</button>
            </Form>
        </div>
    );
}

export default App;