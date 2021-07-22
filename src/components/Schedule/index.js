import React, { useState } from "react";
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import daysOfTheWeek from '../../data/daysOfTheWeek.json';
import './style.scss';


const Schedule = ({ key, handleClick }) => {
    const [day, setDay] = useState(null);

    return (
        <section key={id} className="form-content schedule">
            <div className="period">
                <SelectInput subtitle="Dia da semana" field="week-day" prompt="Selecione" data={daysOfTheWeek}  id="id" label="label" value={day} onChange={(val) => setDay(val)}></SelectInput>
                <Input field="start-hour" pattern="time" subtitle="Das" inputStyle="input-medium" />
                <Input field="finish-hour" pattern="time" subtitle="Até" inputStyle="input-medium" />
            </div>
            <div className="location-row1">
                <Input field="location-cep" pattern="text" subtitle="CEP" inputStyle="input-medium" />
                <Input field="location-UF" pattern="text" subtitle="UF" inputStyle="input-medium" />
                <button className="trash-bin-icon">
                    <DeleteOutlineOutlinedIcon onClick={handleClick} />
                </button>
            </div>
            <div className="location-row2">
                <Input field="location-district" pattern="text" subtitle="Bairro" inputStyle="input-medium" />
                <Input field="location-city" pattern="text" subtitle="Cidade" inputStyle="input-medium" />
                </div>
        </section>
    );
}

export default Schedule;