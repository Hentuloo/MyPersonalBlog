import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';

// GraphCMS imports
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjvgoh7p63cqv01et3u38rorb/master';
const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root'),
);
