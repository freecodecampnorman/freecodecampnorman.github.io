import React from 'react';
import PropTypes from 'prop-types';
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

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string,
                author: PropTypes.string,
            }),
            html: PropTypes.string,
        }),
    }),
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
