import { Windmill } from "@windmill/react-ui";
import React from "react";
import type { AppProps } from "next/app";
import "../styles/index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";

const store = createStore(allReducers);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Windmill>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Windmill>
  );
}
export default MyApp;
