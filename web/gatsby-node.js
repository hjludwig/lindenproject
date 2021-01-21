/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      events: allSanityEvent {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  result.data.events.nodes.forEach(node => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/single-event.jsx`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
