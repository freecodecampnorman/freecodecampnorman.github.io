import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/defaultLayout';
import SEO from '../components/seo';

const SuccessPage = () => (
    <Layout>
        <SEO title="Success" />

        <h1>Thank you!</h1>
        <p>We have received your submission and will get back to you as soon as possible.</p>
        <Link to="/feedback">Return to feedback form</Link>
    </Layout>
);

export default SuccessPage;
