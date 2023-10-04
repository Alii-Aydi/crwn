import React from 'react'

import './button.styles.scss'

const Button = ({ children, buttonType }) => {
    return (
        <button className={`button-container ${buttonType}`}>
            {children}
        </button>
    )
}

export default Button