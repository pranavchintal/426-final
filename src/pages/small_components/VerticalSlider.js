import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export class VerticalSlider extends React.Component {
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
        marginBottom: "-10px !important",
        marginLeft: "-8px !important",
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      track: {
        height: 8,
        width: "8px !important",  
        borderRadius: 4,
      },
      rail: {
        height: 8,
        width: "8px !important",
        borderRadius: 4,
      },
    })(Slider);

    return (
      <PrettoSlider defaultValue={this.props.defaultValue} min={this.props.min} max={this.props.max} className={this.props.className} onChange={this.props.onChange} name={this.props.name} orientation="vertical" />)
  }

}