import React from 'react';
import './Button.css';


const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']
const MARGINS = ['mt-0', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5']


// AQUI ESTOU CRIANDO MEU PROPRIO BOTTAO COM PROPRIEDADES QUE EU QUERO
export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonMargin}) => {

    // SE FOR POSSÍVEL COLOCAR O VALOR DO PARAMETRO NO ARRAY, EU PEGO O ULTIMO VALOR INSERIDO
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonMargin = MARGINS.includes(buttonMargin) ? buttonMargin : MARGINS[0]


    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonMargin}`}
            onClick={onClick}
            type={type}            
            >

            {children}

        </button>
    )
};
