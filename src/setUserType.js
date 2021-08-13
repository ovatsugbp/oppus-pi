import {useEffect} from 'react'

function SetUserType(userType){

   useEffect(() => {
     let updatedUserType = userType;
     return updatedUserType;
    },[userType]);
}

export default SetUserType
