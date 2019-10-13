import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/defaultLayout';
import SEO from '../components/seo';

import './blogpost.scss';

const BlogPost = ({ data: { markdownRemark } }) => {
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
            <p className="author">By {frontmatter.author}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                author
                title
                date(formatString: "MMMM DD, YYYY")
            }
            html
        }
    }
`;

export default BlogPost;
