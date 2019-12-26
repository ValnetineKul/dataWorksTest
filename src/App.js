import React from 'react';
import './App.css';
import {connect} from "react-redux";
import { startPollingAction } from "./Redux/indicatorReducer";
import MainBox from "./Components/mainBox/mainBox";

class App extends React.Component {

  componentDidMount() {
    this.props.startPollingAction()
  }

  render() {
    return (
      <div className="App">
        <MainBox />
      </div>
    );
  }
}

export default connect(null, { startPollingAction })(App);
