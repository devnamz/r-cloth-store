import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...OtherProps}) => (
    <button className='custom-button'>
        {children}
    </button>
)

export default CustomButton;

