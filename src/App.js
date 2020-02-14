import React, { Component } from "react";
// import { connect } from "react-redux";
import store from "./store";
import { Provider } from "react-redux";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <MainPage />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;