import Proptypes from 'prop-types';
import cn from "classnames";

import './style.scss';


const SelectInput = ({ labelStyle, selectStyle, field, handleChange, subtitle, placeHolder, data }) => {

    return (
        <>
            <section className="select-input-area">
                <label className={cn(`select-input-label ${labelStyle}`)} htmlFor={field}>{subtitle}</label>
                <select
                    className={cn(`select-input-field ${selectStyle}`)}
                    name={field}
                    id={field}
                    onChange={handleChange}>
                    <option selected disabled hidden>{placeHolder}</option>
                    {data.map((item) => (
                        <option value={item.id}>{item.label}</option>

                    ))}
                </select>
            </section>
        </>
    );
}

SelectInput.propTypes = {
    field: Proptypes.string,
    subtitle: Proptypes.string,
    onChange: Proptypes.func,
    selectedStyle: Proptypes.string,
    data: Proptypes.array,
};

SelectInput.defaultProps = {
    field: '',
    subtitle: '',
    selectedStyle: "select-input-small",
    data: [],
};

export default SelectInput;