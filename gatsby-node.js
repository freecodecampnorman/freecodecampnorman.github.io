const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    return graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const blogPostTemplate = path.resolve(`src/templates/blogpost.js`);

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            actions.createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
            });
        });
    });
};
