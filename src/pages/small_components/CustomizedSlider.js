import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export class CustomizedSlider extends React.Component {
  render() {
    const PrettoSlider = withStyles({
      root: {
        color: '#D3CCDA',
        height: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      },
    })(Slider);

    return (
      <PrettoSlider defaultValue={this.props.defaultValue} min={this.props.min} max={this.props.max} className={this.props.className} orientation={this.props.orientation}/>)
  }

}