import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MyApp from "./_app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";

const store = createStore(allReducers);

function MainPage() {
  return <Provider store={store}></Provider>;
}

export default MainPage;
