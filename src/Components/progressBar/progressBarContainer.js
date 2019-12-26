import React from 'react';
import * as ACTIONS from '../../Redux/indicatorReducer';
import { connect } from "react-redux";
import ProgressBar from "./progressBar";


class ProgressBarContainer extends React.Component {

  render() {
    return (
      <ProgressBar
        money={this.props.money}
        goalMoney={this.props.goalMoney}
        getMoney={this.props.setMoney}
      />
    )
  }
}

const mapStateToProps = (state) => (
  {
    money: state.progressBarPage.money,
    goalMoney: state.progressBarPage.goalMoney,
  });

const mapDispatchToProps = {
  setMoney: ACTIONS.setMoneyAction,

};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarContainer);