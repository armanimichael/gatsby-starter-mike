// If you don't want to use TypeScript you can delete this file!
import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import { Image } from '../components/';
import { Layout } from '../containers/';

type DataProps = {
  site: {
    buildTime: string;
  };
};

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don&apos;t support TypeScript yet.
    </p>
    <p>
      For type checking you&apos;ll want to install <em>typescript</em> via npm
      and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You&apos;re currently on the page &quot;{path}&quot; which was built on{' '}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{' '}
      <a href="https://www.gatsbyjs.org/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
    <ul>
      <li>Something</li>
      <li>Something Else</li>
      <li>Something more</li>
    </ul>
    <ol>
      <li>Something</li>
      <li>Something Else</li>
      <li>Something more</li>
    </ol>
    <Image filename="city.jpg" alt="" height="173px" width="300px" />
  </Layout>
);

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
