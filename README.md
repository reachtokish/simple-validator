# Simple React Form Validator
This package will help to make forms validation easier than ever before.
## Example for Tag

    <Wrapper>
        <Form>
            <label>Name</label><br />
            <Input
                type="text"
                placeholder="Enter Name"
                name="name"
                validators={['required', 'min:5']}
            />
        </Form>
    </Wrapper>

## Default Rules

 - isRequired
 - min:5
 - max:10
 - isEmail
 - isNumber
 - isExact:10

## Form settings
 - instantValidate (default: false)