import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

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

registerServiceWorker();
