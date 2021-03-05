import React, { useState } from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import MachListPage from '../MachListPage/MachListPage'
import styled from 'styled-components'


const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    width: 400px;
    height: 600px;
    margin: 30px;
`

export default function Main() {
    const [selectedPage, setSelectedPege] = useState('choose-profile')

    const renderSelectedPage = () => {
        switch (selectedPage){
            case 'choose-profile':
                return <ChooseProfilePage/>
            case 'match-list':
                return <MachListPage/>
            default:
                return <ChooseProfilePage/>
        }
    }

    const goToChooseProfilePage = () => {
        setSelectedPege('choose-profile')
    }

    const goToMachListPage = () => {
        setSelectedPege('match-list')
    }

    return (
        <MainContainer>
            <AppBar goToChooseProfilePage={goToChooseProfilePage} goToMachListPage={goToMachListPage}/>
        {renderSelectedPage()}
        </MainContainer>
    )
}
