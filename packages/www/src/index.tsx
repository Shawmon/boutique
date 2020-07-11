import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://10.10.10.32:4000',
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
