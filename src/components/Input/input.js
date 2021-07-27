import React from 'react'
import cn from "classnames";
import './style.scss'

const Input = ({pattern, subtitle, field, inputStyle, inputValue, onInput}) => {
    return (
        <> 
        <section className="inputs-area">
            <label className="input-label" htmlFor={field}>{subtitle}</label>
            <input required className={cn(`input-field ${inputStyle}`)} type={pattern} name={field} value={inputValue} onInput={onInput}/>
        </section>
        </>
    )
}

export default Input
