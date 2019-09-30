import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FeedbackPage = () => (
    <Layout>
        <SEO title="Feedback" />
        <h1>Feedback</h1>
        <blockquote className="blockquote">
            We all need people who will give us feedback. That's how we improve.
            <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
        <blockquote className="blockquote">
            I think it's very important to have a feedback loop, where you're constantly thinking about what you've done
            and how you could be doing it better.
            <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>

        <h2>Send us a message</h2>

        <p>
            Have any questions or feedback for our group? Fill in the form below and one of the organizers will get back
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

export default FeedbackPage;
