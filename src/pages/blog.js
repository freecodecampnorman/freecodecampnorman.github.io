import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/defaultLayout';
import SEO from '../components/seo';
import BlogItem from '../components/blogitem';
import { useStaticQuery } from 'gatsby';

const BlogPage = () => {
    let data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
                edges {
                    node {
                        excerpt(pruneLength: 100)
                        frontmatter {
                            author
                            date(formatString: "MMM Do YYYY")
                            title
                            path
                        }
                        timeToRead
                    }
                }
            }
        }
    `);

    let posts = data.allMarkdownRemark.edges.map(post => ({
        excerpt: post.node.excerpt,
        frontmatter: post.node.frontmatter,
        timeToRead: post.node.timeToRead,
    }));

    return (
        <Layout>
            <SEO title="Blog" />

            <h1>FreeCodeCamp Norman Blog</h1>

            {posts.map(post => (
                <BlogItem key={`${post.frontmatter.path}-post`} post={post} />
            ))}
        </Layout>
    );
};

export default BlogPage;
