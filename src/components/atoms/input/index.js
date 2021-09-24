import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function Input({ controlId, title, type, placeholder }) {
    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId={controlId}>
                <Form.Label column sm="2">{title}</Form.Label>
                <Col sm="10">
                    <Form.Control type={type} placeholder={placeholder} />
                </Col>
            </Form.Group>
        </div>
    )
}
