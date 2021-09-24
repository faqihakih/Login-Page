import React from 'react'
import { Form } from 'react-bootstrap'
import { Button, Input } from '../../atoms'

export default function SignUp() {
    return (
        <div>
            <Form>
                <Input controlId="FullName" title="Full Name" type="text" placeholder="Your Full Name" />
                <Input controlId="PhoneNumber" title="Phone Number" type="number" placeholder="Phone Number (021) 2950000" />
                <Input controlId="Email" title="Email" type="email" placeholder="Email Address" />
                <Input controlId="Password" title="Password" type="password" placeholder="Password" />
                <Button color="primary" title="Sign Up" />
            </Form>
        </div>
    )
}
