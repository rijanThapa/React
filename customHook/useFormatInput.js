import React from 'react';
import { useState } from 'react';

export  function useFormatInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleChange  
    };

    return inputProps;
}