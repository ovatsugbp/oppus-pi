import React, { useState } from "react";
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import daysOfTheWeek from '../../data/daysOfTheWeek.json';
import './style.scss';
import getAddress from './get-address'

const Schedule = ({ id, handleClick }) => {
    const [day, setDay] = useState(null);
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [neighborhood, setNeighborhood] = useState()
    const [schedule, setSchedule] = useState({
        startTime: '',
        finishTime: '',
        locationCep: '',
        locationUF: state,
        locationDistrict: city,
        locationCity: neighborhood
    })

    const [errors, setErrors] = useState({})
    let isValid;

    function validateSchedule() {
        errors = {};

        if(!values.startTime) {
            errors.startTime = "Campo obrigatório";
            isValid = false;
        }
        if(!values.finishTime) {
            errors.finishTime = "Campo obrigatório";
            isValid = false;
        }
        if(!values.locationCep) {
            errors.locationCep = "Campo obrigatório";
            isValid = false;
        } else if(!/\d{8}/.test(locationCep)){
            errors.locationCep = "Formato de CEP inválido (digite somente números)";
            isValid = false;
        }
        if(!values.locationUF) {
            errors.locationUF = "Campo obrigatório";
            isValid = false;
        }
        if(!values.locationCity) {
            errors.locationCity = "Campo obrigatório";
            isValid = false;
        }
        if(!values.locationDistrict) {
            errors.locationDistrict = "Campo obrigatório";
            isValid = false;
        }
        else {
            isValid = true;
        }
        setErrors({... errors});
    }

    const handleChange = e => {
        setSchedule(
            {...schedule, [e.target.name]: e.target.value}
    );
        console.log(schedule);
        validateSchedule();
    }


    return (
        <section key={id} className="form-content schedule">
            <div className="period">
                <SelectInput subtitle="Dia da semana" field="week-day" prompt="Selecione" data={daysOfTheWeek}  id="id" label="label" value={day} onChange={(val) => setDay(val)}></SelectInput>
                <Input field="start-hour" pattern="time" inputValue={schedule.startTime} subtitle="Das" inputStyle="input-medium" onChange={handleChange} />
                 <p className="error-message">{errors.startTime}</p>
                <Input field="finish-hour" pattern="time" inputValue={schedule.finishTime} subtitle="Até" inputStyle="input-medium" onChange={handleChange} />
                 <p className="error-message">{errors.finishTime}</p>
            </div>
            <div className="location-row1">
                <Input field="location-cep" 
                pattern="text" 
                subtitle="CEP" 
                inputStyle="input-medium" 
                onChange={ 
                    async(e)=> {
                        let cep = e.target.value
                        if(cep.length === 8){
                            console.log(cep)
                            let data = await getAddress(cep)
                            let {city,neighborhood,state} = data
                            setCity(city)
                            setNeighborhood(neighborhood)
                            setState(state)

                        }
                    }
            }/>
                <Input field="locationUF" pattern="text" subtitle="UF" inputStyle="input-medium" inputValue={state} onChange={handleChange} />
                <button className="trash-bin-icon">
                    <DeleteOutlineOutlinedIcon onClick={handleClick} />
                </button>
            </div>
            <p className="error-message">{errors.locationCep}</p>
            <p className="error-message">{errors.locationUF}</p>
            <div className="location-row2">
                <Input field="location-district" pattern="text" subtitle="Bairro" inputStyle="input-medium" inputValue={neighborhood} onChange={handleChange} />
                <Input field="location-city" pattern="text" subtitle="Cidade" inputStyle="input-medium" inputValue={city} onChange={handleChange} />
            </div>
            <p className="error-message">{errors.locationDistrict}</p>
            <p className="error-message">{errors.locationcity}</p>
        </section>
    );
}

export default Schedule;