import React, { useEffect,useState } from "react";
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import SaveIcon from '@material-ui/icons/Save';
import daysOfTheWeek from '../../data/daysOfTheWeek.json';
import './style.scss';
import getAddress from './get-address'
import {saveInDataBase} from "../../services/consumeApi"
const Schedule = ({scheduleId, professionalId, weekDay, startHour, finishHour, zipCodeSchedule,
     state, city, district, handleClick, isDisable}) => {
    const [day, setDay] = useState(null);
    const [address, SetAddress] = useState()
    const [newSchedule, setNewSchedule] = useState({
        id: scheduleId,
        cep: "",
        city: "",
        district: "",
        street: "",
        uf: "",
        availableDay: "",
        finishHour: "",
        startHour: 0
    })

    function saveSchedule(newSchedule){        
        saveInDataBase(`http://localhost:8080/api/schedule/register/${professionalId}`, newSchedule).then(response => console.log(response))
    }
        
    async function updateAddress(e){
        let zipCode = e.target.value
        if(zipCode.length === 8 ){
            let data = await getAddress(zipCode)
            SetAddress(data)
            setNewSchedule({...newSchedule,...data})

            return data
        }
    }

    return (
        <section key={scheduleId} className="form-content schedule">
            <div className="period">
                <SelectInput subtitle="Dia da semana" 
                field="week-day" 
                prompt={weekDay || "Selecione"} 
                data={daysOfTheWeek}  id="id" 
                label="label" 
                value={day} 
 
                isDisable={isDisable}

                onChange={(val) => {
                                setDay(val)
                                setNewSchedule({...newSchedule, nameActivity:val.label})
                            }}
                />
                
                <Input field="start-hour" 
                pattern="time" 
                subtitle="Das" 
                inputStyle="input-medium" 
                inputValue={startHour} 
                isDisable={isDisable}
                onChange={(e)=>setNewSchedule({...newSchedule,startHour:e.target.value})}/>
                {/* <p className="error-message">{errors.startTime}</p> */}
                
                <Input field="finish-hour" 
                pattern="time" 
                subtitle="Até" 
                inputStyle="input-medium" 
                inputValue={finishHour} 
                isDisable={isDisable}
                onChange={(e)=>setNewSchedule({...newSchedule,finishHour:e.target.value})}/>
                {/* <p className="error-message">{errors.finishTime}</p> */}
            </div>
            <div className="location-row1">

                <Input field="location-zipCode" 
                pattern="text" 
                subtitle="CEP" 
                inputStyle="input-medium" 
                inputValue={zipCodeSchedule}
                onChange={(e)=> {updateAddress(e)}}
                isDisable={isDisable}/>

                <Input field="locationUF" 
                pattern="text" subtitle="UF"  
                inputStyle="input-medium" 
                inputValue={address?.state || state} 
                isDisable={isDisable}
                onChange={(e)=>{setNewSchedule({...newSchedule,uf:e.target.value})}}/>
                <button className="trash-bin-icon">
                    <SaveIcon className={`save-schedule-button hidden-${isDisable}`} key={`save-schedule-${scheduleId}`} id={`save-schedule-${scheduleId}`} onClick={()=> saveSchedule(newSchedule)}/>
                    <DeleteOutlineOutlinedIcon className="delete-schedule-button" key={`delete-schedule-${scheduleId}`} id={`delete-schedule-${scheduleId}`} onClick={handleClick} />
                </button>
            </div>
            {/* <p className="error-message">{errors.locationCep}</p> */}
            {/* <p className="error-message">{errors.locationUF}</p> */}
            <div className="location-row2">

                <Input field="location-district" 
                pattern="text" subtitle="Bairro" 
                inputStyle="input-medium" 
                inputValue={address?.district || district } 
                isDisable={isDisable} 
                onChange={(e)=>{setNewSchedule({...newSchedule,district:e.target.value})}}/>

                <Input field="location-city" 
                pattern="text" 
                subtitle="Cidade" 
                inputStyle="input-medium" 
                inputValue={address?.city || city} 
                isDisable={isDisable} 
                onChange={(e)=>{setNewSchedule({...newSchedule,city:e.target.value})}}/>
                </div>
                 {/* <p className="error-message">{errors.locationDistrict}</p> */}
            {/* <p className="error-message">{errors.locationcity}</p> */}
                <div className="form-mid2"></div>
        </section>
    );
}

export default Schedule;