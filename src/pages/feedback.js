import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blockquote from 'react-bootstrap/';

const FeedbackPage = () => (
    <Layout>
        <SEO title="freeCodeCamp Norman - Feedback" />
        <h1>Feedback</h1>
        <blockquote className="blockquote">
            We all need people who will give us feedback. That's how we improve.
            <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
        <blockquote className="blockquote">
            I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.
            <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>

        <h2>Send us a message</h2>


    </Layout>
);

export default FeedbackPage;
