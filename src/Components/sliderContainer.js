import React from 'react';
import * as ACTIONS from '../Redux/taskReducer';
import MySlider from "./slider";
import { connect } from "react-redux";


class SliderContainer extends React.Component {

  render() {
    return (
      <MySlider
        money={this.props.money}
        getData={this.props.setMoney}
      />
    )
  }
}

const mapStateToProps = (state) => (
  {
    money: state.sliderPage.money,
});

const mapDispatchToProps = {
  setMoney: ACTIONS.setMoneyAction,

};

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);