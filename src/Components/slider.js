import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import styles from './slider.module.css';

const MySlider = (props) => {
  return (
    <div className={styles.root}>

      <span>
        <Grid container spacing={2} alignItems="center">
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider
            className={styles.slider}
            value={ props.money }
            aria-labelledby="input-slider"
            min={0}
            max={15}
            step={1}
          />
        </Grid>
        <Grid item>
           <div>
             Reached
           </div>
          <div>
             { props.money }
          </div>
        </Grid>
      </Grid>

      </span>
    </div>
  );
};

export default MySlider;
