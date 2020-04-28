import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./fonts/spacegrotesk/SpaceGrotesk-Regular.otf";
import "./fonts/spacegrotesk/SpaceGrotesk-SemiBold.otf";
import "./fonts/syne/Syne-Bold.otf";

const client = new ApolloClient({
  uri: "https://eu1.prisma.sh/marion-36c618/server/dev",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
