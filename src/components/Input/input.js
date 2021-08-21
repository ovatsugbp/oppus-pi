import * as React from 'react'
import cn from "classnames";
import './style.scss'

const Input = ({pattern, subtitle, field, inputStyle, inputValue, onChange, isDisable}) => {
    return (
        <> 
        <section className="inputs-area">
            <label className="input-label" htmlFor={field}>{subtitle}</label>
            <input required className={cn(`input-field ${inputStyle} input-disable-${isDisable}`)} type={pattern} name={field} defaultValue={inputValue} onChange={onChange} readOnly={isDisable}/>
        </section>
        </>
    )
}

export default Input
