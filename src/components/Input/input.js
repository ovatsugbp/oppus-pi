import * as React from 'react'
import cn from "classnames";
import './style.scss'

const Input = ({pattern, subtitle, field, inputStyle, inputValue, onChange}) => {
    return (
        <> 
        <section className="inputs-area">
            <label className="input-label" htmlFor={field}>{subtitle}</label>
            <input required className={cn(`input-field ${inputStyle}`)} type={pattern} name={field} defaultValue={inputValue} onChange={onChange}/>
        </section>
        </>
    )
}

export default Input
