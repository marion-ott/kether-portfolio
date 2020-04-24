import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './fonts/spacegrotesk/SpaceGrotesk-Regular.otf'
import './fonts/spacegrotesk/SpaceGrotesk-SemiBold.otf'
import './fonts/syne/Syne-Bold.otf'

const client = new ApolloClient({
  uri: 'http://127.0.0.1',
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
