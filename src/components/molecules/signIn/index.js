import React from 'react'
import { Form } from 'react-bootstrap'
import { Button, Input } from '../../atoms'

export default function SignIn() {
    return (
        <div className="container p-3">
            <Form>
                <Input controlId="Email" title="Email" type="email" placeholder="Email Address" />
                <Input controlId="Password" title="Password" type="password" placeholder="Password" />
                <Button color="success" title="Sign In"/>
            </Form>
        </div>
    )
}
