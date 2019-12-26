import React from 'react';
import ProgressBarContainer from "../progressBar/progressBarContainer";
import styles from './mainBox.module.css';
import {connect} from "react-redux";

const MainBox = (props) => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.header}>
        Target Indicator Demo
      </div>
      <div className={styles.wrapper}>
        <div className={styles.pbcWrapper}>
          <div>
            Reached:
          </div>
          <ProgressBarContainer/>
        </div>
        <div
          className={styles.targetBox}
          style={{
            background: (props.money >= props.goalMoney)
              ? '#00A910'
              : 'gray'
          }}
        >
          <div className={styles.targetBoxText}>
            <div>
              Target
            </div>
            <div>
              15$
            </div>
          </div>
        </div>
      </div>
      <div className={styles.goalInfo}>
        {(props.money >= props.goalMoney)
          ? ''
          : `You need $${props.goalMoney - props.money} more to reach your target.`
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state) => (
  {
    money: state.progressBarPage.money,
    goalMoney: state.progressBarPage.goalMoney,
  });

export default connect(mapStateToProps, null)(MainBox);