import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange }) {

    console.log('params.....', params);
    return (
        <Form className="mb-4">
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
                </Form.Group>
                <Form.Group className="d-flex align-items-end">
                    <Form.Check className="mb-2" type="checkbox" label="Full time only"  onChange={onParamChange} value={params.full_time} name="full-time"/>
                </Form.Group>
            </Form.Row>
        </Form>
    );

}