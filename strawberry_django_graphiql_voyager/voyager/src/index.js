import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Voyager } from 'graphql-voyager';

function introspectionProvider(query) {
  const { graphqlEndpoint } = window.VOYAGER_SETTINGS
  console.log({ graphqlEndpoint });
  return fetch(graphqlEndpoint, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: query }),
  }).then((response) => response.json());
}

ReactDOM.render(
    <Voyager introspection={introspectionProvider} />,
    document.getElementById('root'),
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
