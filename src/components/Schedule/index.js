import React, { useState } from "react";
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import daysOfTheWeek from '../../data/daysOfTheWeek.json';
import './style.scss';
import getAddress from './get-address'

const Schedule = ({ key, handleClick }) => {
    const [day, setDay] = useState(null);
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [neighborhood, setNeighborhood] = useState()

    return (
        <section key={key} className="form-content schedule">
            <div className="period">
                <SelectInput subtitle="Dia da semana" field="week-day" prompt="Selecione" data={daysOfTheWeek}  id="id" label="label" value={day} onChange={(val) => setDay(val)}></SelectInput>
                <Input field="start-hour" pattern="time" subtitle="Das" inputStyle="input-medium" />
                <Input field="finish-hour" pattern="time" subtitle="Até" inputStyle="input-medium" />
            </div>
            <div className="location-row1">
                <Input field="location-cep" 
                pattern="text" 
                subtitle="CEP" 
                inputStyle="input-medium" 
                onInput={ 
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
                <Input field="location-UF" pattern="text" subtitle="UF" inputStyle="input-medium" inputValue={state}/>
                <button className="trash-bin-icon">
                    <DeleteOutlineOutlinedIcon onClick={handleClick} />
                </button>
            </div>
            <div className="location-row2">
                <Input field="location-district" pattern="text" subtitle="Bairro" inputStyle="input-medium" inputValue={neighborhood}/>
                <Input field="location-city" pattern="text" subtitle="Cidade" inputStyle="input-medium" inputValue={city}/>
                </div>
        </section>
    );
}

export default Schedule;