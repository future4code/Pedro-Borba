import React from 'react'
import styled from 'styled-components'

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    padding: 0 8px;
`
export default function AppBar(props) {
    return (
        <AppBarContainer>
            <button onClick={props.goToChooseProfilePage}>Escolher</button>
            <p> Astromach </p>
            <button onClick={props.goToMachListPage}>Lista</button>
        </AppBarContainer>
    )
}
