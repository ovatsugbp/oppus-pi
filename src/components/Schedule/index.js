import React, { useState } from "react";
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import SaveIcon from '@material-ui/icons/Save';
import daysOfTheWeek from '../../data/daysOfTheWeek.json';
import './style.scss';
import getAddress from './get-address'

const Schedule = ({id, weekDay, startHour, finishHour, zipCodeSchedule,
     state, city, neighborhood, handleClick, onClickSave, isDisable}) => {
    const [day, setDay] = useState(null);
    const [address, SetAddress] = useState()
    
    async function updateAddress(e){
        let zipCode = e.target.value
        if(zipCode.length === 8){
            let data = await getAddress(zipCode)
            SetAddress(data)

        }
    }

    return (
        <section key={id} className="form-content schedule">
            <div className="period">
                <SelectInput subtitle="Dia da semana" field="week-day" prompt={weekDay || "Selecione"} data={daysOfTheWeek}  id="id" label="label" value={day} onChange={(val) => setDay(val)} isDisable={isDisable}></SelectInput>
                <Input field="start-hour" pattern="time" subtitle="Das" inputStyle="input-medium" inputValue={startHour} isDisable={isDisable}/>
                <Input field="finish-hour" pattern="time" subtitle="Até" inputStyle="input-medium" inputValue={finishHour} isDisable={isDisable}/>
            </div>
            <div className="location-row1">
                <Input field="location-zipCode" 
                pattern="text" 
                subtitle="CEP" 
                inputStyle="input-medium" 
                inputValue={zipCodeSchedule}
                onInput={(e)=> updateAddress(e)} isDisable={isDisable}/>
                <Input field="location-UF" pattern="text" subtitle="UF" inputStyle="input-medium" inputValue={address?.state || state} isDisable={isDisable}/>
                <button className="trash-bin-icon">
                    <SaveIcon className={`save-schedule-button hidden-${isDisable}`} key={`save-schedule-${id}`} id={`save-schedule-${id}`} onClick={()=> onClickSave()}/>
                    <DeleteOutlineOutlinedIcon className="delete-schedule-button" key={`delete-schedule-${id}`} id={`delete-schedule-${id}`} onClick={handleClick} />
                </button>
            </div>
            <div className="location-row2">
                <Input field="location-district" pattern="text" subtitle="Bairro" inputStyle="input-medium" inputValue={address?.neighborhood || neighborhood } isDisable={isDisable}/>
                <Input field="location-city" pattern="text" subtitle="Cidade" inputStyle="input-medium" inputValue={address?.city || city} isDisable={isDisable}/>
                </div>
                <div className="form-mid2"></div>
        </section>
    );
}

export default Schedule;