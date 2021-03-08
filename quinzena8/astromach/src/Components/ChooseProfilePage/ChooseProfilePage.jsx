import React, {useEffect, useState} from 'react';
import ChooseBottons from './ChooseBottons';
import ProfileCard from './ProfileCard';
import axios from 'axios';

export default function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState({})
    
    const getProfileToChoose = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/borba/person') 
        .then(response => {
        setProfileToChoose(response.data.profile)
        })
}
    const chooseProfile = (choice) => {
        const body = {
        choice: choice,
        id: profileToChoose.id
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/borba/choose-person', body) 
        .then(response => {
            console.log(response)
            getProfileToChoose()
        })
    }

    useEffect(() => {
        getProfileToChoose()
         }, []);

    const onClickNo = () => {
        getProfileToChoose(false)
    }

    const onClickYes = () => {
        getProfileToChoose(true)
    }

    return (
        <div>
            <ProfileCard profile={profileToChoose}/>
            <ChooseBottons onClickNo={onClickNo} onClickYes={onClickYes}/>
        </div>
    )
}
