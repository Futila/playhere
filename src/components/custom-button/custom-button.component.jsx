import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({textButton,...otherProps})=>(
    <button className= "custom-button "{...otherProps} >
        {textButton}
    </button>
)

export default CustomButton;