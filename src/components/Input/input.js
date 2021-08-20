import * as React from 'react'
import cn from "classnames";
import './style.scss'

const Input = ({pattern, subtitle, field, inputStyle, inputValue, onInput, isDisable}) => {
    return (
        <> 
        <section className="inputs-area">
            <label className="input-label" htmlFor={field}>{subtitle}</label>
            <input required className={cn(`input-field ${inputStyle} input-disable-${isDisable}`)} type={pattern} name={field} defaultValue={inputValue} onInput={onInput} readOnly={isDisable}/>
        </section>
        </>
    )
}

export default Input
