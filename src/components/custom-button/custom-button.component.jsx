import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSign, ...OtherProps}) => (
    <button className={ `${ isGoogleSign ? 'google-sign-in' : '' } custom-button`} {...OtherProps}>
        {children}
    </button>
)

export default CustomButton;

