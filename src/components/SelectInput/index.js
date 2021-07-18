import React, { useState, useRef, useEffect } from "react";
import './style.scss';

const SelectInput = ({ subtitle, field, data, prompt, value, onChange }) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("click", toggle)
        return () => document.removeEventListener("click", toggle)
    }, []);

    function toggle(e) {
        setOpen(e && e.target === ref.current)
    }

    function filter(data) {
        return data.filter(
            option => option.label.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }

    function displayValue() {
        if (query.length > 0) return query;
        if (value) return value.label;
        return "";
    }

    return (
        <section className="dropdown">
             <label className="input-label" htmlFor={field}>{subtitle}</label>
            <div className="control">
                <div className={`selected-value ${open ? "open" : null}`}>
                    <input type="text"
                        ref={ref}
                        placeholder={value ? value.label : prompt}
                        value={displayValue()}
                        onChange={e => {
                            setQuery(e.target.value)
                            onChange(null)
                        }}
                        onClick={toggle} />
                </div>
                <div className={`arrow ${open ? "open" : null}`} />
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {filter(data).map((option) => (
                    <div key={option.id} className={`option ${value === option ? "selected" : null}`}
                        onClick={() => {
                            setQuery("");
                            onChange(option);
                            setOpen(false);
                        }}>{option.label}</div>)
                )
                }

            </div>
        </section>
    );
}

export default SelectInput;