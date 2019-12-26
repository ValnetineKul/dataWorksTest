import React from 'react';
import styles from './progressBar.module.css'


class ProgressBar extends React.Component{
  render() {
    console.log(this.props, 9999999);
    return (
      <div className={styles.outerProgressBar}>
        <div
          style={{ width: `${(100 / this.props.goalMoney) * this.props.money}%` }}
          className={styles.innerProgressBar}
        >
          <div className={styles.numberInProgress}>
            {this.props.money}
          </div>
        </div>
      </div>
    )
  }
}

export default ProgressBar;