import React from 'react'
import './ButtonSecondary.css'


const SIZES = ['btn--medium', 'btn--large']
const STYLES = ['btn--tatakae', 'btn--eren']


// AQUI ESTOU CRIANDO MEU PROPRIO BOTTAO COM PROPRIEDADES QUE EU QUERO
export const ButtonSecondary = ({type, children, styleClass, sizeClass}) => {

    // SE FOR POSSÍVEL COLOCAR O VALOR DO PARAMETRO NO ARRAY, EU PEGO O ULTIMO VALOR INSERIDO
    const defaultSizeClass = SIZES.includes(sizeClass) ? sizeClass : SIZES[0]
    const defaultStyleClass = STYLES.includes(styleClass) ? styleClass : STYLES[0]

    return(
        <button className={`btn ${defaultSizeClass} ${defaultStyleClass}`} 
            type={type}
            >

            {children}
        </button>

    )
}


