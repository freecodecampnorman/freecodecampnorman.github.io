import React from 'react';

import Layout from '../components/defaultLayout';
import SEO from '../components/seo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactPage = () => (
    <Layout>
        <SEO title="Contact Us" />
        <h1>Contact Us</h1>
        <blockquote className="blockquote">
            Honest communication is built on truth and integrity and upon respect of the one for the other.
            <footer className="blockquote-footer">Benjamin E. Mays</footer>
        </blockquote>
        <blockquote className="blockquote">
            Wise men speak because they have something to say; Fools because they have to say something.
            <footer className="blockquote-footer">Plato</footer>
        </blockquote>

        <h2>Send us a message</h2>

        <p>
            Have any questions or contact for our group? Fill in the form below and one of the organizers will get back
            to you as soon as possible!
        </p>

        <Form name="contact-form" method="POST" action="/success" data-netlify="true">
            <Form.Control type="hidden" name="form-name" />
            <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="email@example.com" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" name="message" placeholder="Your message here" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    </Layout>
);

export default ContactPage;
