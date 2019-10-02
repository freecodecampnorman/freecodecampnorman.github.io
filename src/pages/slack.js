import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SlackPage = () => (
    <Layout>
        <SEO title="Join us on Slack" />

        <h1>Techlahoma Slack</h1>
        <p>
            Join us on slack! Our friends at Techlahoma have hooked us up with a free Slack channel so we can hang out
            and chat on our laptops, tablets, phones, and browsers from anywhere.
        </p>

        <h2>How to get started</h2>

        <p>Follow these steps to get signed up on the Techlahoma Slack:</p>

        <ol>
            <li>
                Visit <a href="https://slack.techlahoma.org">slack.techlahoma.org</a>.
            </li>
            <li>Enter your email and acknowledge that you agree to the Techlahoma Code of Conduct.</li>
            <li>Check your email for a message from Techlahoma with a link to join the Slack workspace.</li>
            <li>Fill in your profile details and you should be able to sign into the workspace.</li>
            <li>
                Join our channel <code>#fcc-norman</code> by clicking the word "Channels" in the sidebar and searching
                the name.
            </li>
        </ol>

        <p>Some other channels we recommend:</p>
        <ul>
            <li>
                <code>#freecodecamp</code>
            </li>
            <li>
                <code>#freecodecampokc</code>
            </li>
            <li>
                <code>#javascript</code>
            </li>
            <li>
                <code>#jobs</code>
            </li>
        </ul>
    </Layout>
);

export default SlackPage;
