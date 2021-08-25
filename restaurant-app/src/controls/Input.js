import { TextField } from '@material-ui/core';
import React from 'react'

export default function Input(props) {
    const { name, label, value, variant, onChange, error = null, ...other } = props;
    return (
        <TextField
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}
