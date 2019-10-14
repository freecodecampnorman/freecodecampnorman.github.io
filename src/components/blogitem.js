import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './blogitem.scss';

const BlogItem = ({ post }) => (
    <Link className="blog-link" to={post.frontmatter.path}>
        <article className="blog-list-item">
            <h2>{post.frontmatter.title}</h2>
            <p>{post.excerpt}</p>
            <p>
                {post.frontmatter.date} | {post.timeToRead} min read
            </p>
        </article>
    </Link>
);

BlogItem.propTypes = {
    post: PropTypes.shape({
        excerpt: PropTypes.string,
        timeToRead: PropTypes.number,
        frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            path: PropTypes.string,
        }),
    }),
};

export default BlogItem;
