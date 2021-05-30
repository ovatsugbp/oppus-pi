import React from 'react'
import cn from "classnames";
import './style.scss'

const Input = ({pattern, subtitle, field, inputStyle}) => {
    return (
        <> 
        <section className="inputs-area">
            <label className="input-label" htmlFor={field}>{subtitle}</label>
            <input className={cn(`input-field ${inputStyle}`)} type={pattern} name={field}/>
        </section>
        </>
    )
}

export default Input
