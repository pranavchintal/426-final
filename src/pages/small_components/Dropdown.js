import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [val, setVal] = React.useState('');

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={val}
                onChange={handleChange}
                label="Age"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Sine</MenuItem>
                <MenuItem value={20}>Square</MenuItem>
                <MenuItem value={30}>Triangle</MenuItem>
                <MenuItem value={30}>Noise</MenuItem>
            </Select>
        </FormControl>
    )
}  