import React, { useEffect,useState } from "react";
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import SaveIcon from '@material-ui/icons/Save';
import daysOfTheWeek from '../../data/daysOfTheWeek.json';
import './style.scss';
import getAddress from './get-address'
import {saveInDataBase, deleteInDataBase} from "../../services/consumeApi"

const Schedule = ({scheduleList, setScheduleList, scheduleId, professionalId, weekDay, startHour, finishHour, zipCodeSchedule,
     state, city, district, isDisable}) => {
    const [day, setDay] = useState(null);
    const [address, SetAddress] = useState()
    const [errors, setErrors] = useState({})
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

    let isValid;

    function validateSchedule(){
        let errors={};
        
        if(!newSchedule.availableDay){
        errors.availableDay = "Dia obrigatório";
        isValid = false;
        }
        if(!newSchedule.startHour) {
            errors.startHour = "Horário de início obrigatório";
            isValid = false;
        }
        
        if(!newSchedule.finishHour) {
            errors.finishHour = "Horário de fim obrigatório";
            isValid = false;
        }
            
        if(!newSchedule.cep) {
            errors.cep = "CEP obrigatório";
            isValid = false;
        } else if(!/\d{8}/.test(newSchedule.cep)){
            errors.cep = "CEP inválido";
            isValid = false;
        }
        
        if(!newSchedule.uf) {
            errors.uf = "UF obrigatória";
            isValid = false;
        }
        
        if(!newSchedule.city) {
            errors.city = "Cidade obrigatória";
            isValid = false;
        }
        
        if(!newSchedule.district) {
            errors.district = "Bairro obrigatório";
            isValid = false;
        }
        else {
            isValid = true;
        }
        setErrors({...errors});
    }


    function saveSchedule(newSchedule){        
        isDisable = true
        saveInDataBase(`http://localhost:8080/api/schedule/register/${professionalId}`, newSchedule).then(response => {
            setNewSchedule({...newSchedule, id: response.id})
            console.log("response",response)
        })
    }

    function deleteSchedule(scheduleId){
        setScheduleList(scheduleList.filter(schedule => schedule.id !== scheduleId))
        deleteInDataBase(`http://localhost:8080/api/schedule/delete/${scheduleId}`).then(response => console.log(response))
    }

    const handleSubmit = e => {
            validateSchedule();
            e.preventDefault();
            if(isValid) {
                saveSchedule(newSchedule);
            }
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
                                setNewSchedule({...newSchedule, availableDay:val.label})
                            }}
                />
                <Input field="start-hour" 
                pattern="time" 
                subtitle="Das" 
                inputStyle="input-medium" 
                inputValue={startHour} 
                isDisable={isDisable}
                onChange={(e)=>setNewSchedule({...newSchedule,startHour:e.target.value})}/>
                
                <Input field="finish-hour" 
                pattern="time" 
                subtitle="Até" 
                inputStyle="input-medium" 
                inputValue={finishHour} 
                isDisable={isDisable}
                onChange={(e)=>setNewSchedule({...newSchedule,finishHour:e.target.value})}/>
            </div>
                <p className="error-message">{errors.availableDay}</p>
                <p className="error-message">{errors.startHour}</p>
                <p className="error-message">{errors.finishHour}</p>
            
            <div className="location-row1">

                <Input field="location-zipCode" 
                pattern="text" 
                subtitle="CEP" 
                inputStyle="input-medium" 
                inputValue={zipCodeSchedule}
                onChange={(e)=> {
                    setNewSchedule({...newSchedule,cep: e.target.value});
                    updateAddress(e);}}
                isDisable={isDisable}/>

                <Input field="locationUF" 
                pattern="text" subtitle="UF"  
                inputStyle="input-medium" 
                inputValue={address?.state || state} 
                isDisable={isDisable}
                onChange={(e)=>{setNewSchedule({...newSchedule,uf:e.target.value})}}/>
                <button className="trash-bin-icon">
                    <SaveIcon className={`save-schedule-button hidden-${isDisable}`} key={`save-schedule-${scheduleId}`} id={`save-schedule-${scheduleId}`} onClick={(e) => handleSubmit(e)}/>
                    <DeleteOutlineOutlinedIcon className="delete-schedule-button" key={`delete-schedule-${scheduleId}`} id={`delete-schedule-${scheduleId}`} onClick={()=> deleteSchedule(scheduleId)} />
                </button>
            </div>
 
                <p className="error-message">{errors.cep}</p>
                <p className="error-message">{errors.uf}</p>

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
                
                    <p className="error-message">{errors.district}</p>
                    <p className="error-message">{errors.city}</p>
                
                <div className="form-mid2"></div>
        </section>
    );
}

export default Schedule;