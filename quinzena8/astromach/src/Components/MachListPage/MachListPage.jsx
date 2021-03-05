import React, { useState, useEffect } from 'react'
import MachListItem from './MachListItem';
import styled from 'styled-components';
import axios from 'axios';

const MachListContainer = styled.div`
    padding: 8px;
`

export default function MachListPage() {
    const [matches, setMatches] = useState([])

      useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/borba/matches') 
        .then(response => {
        setMatches(response.data.matches)
          })
         }, []);

    return (
        <MachListContainer>
            {matches.map((profile) => {
                return <MachListItem profile={profile} />
            })}
        </MachListContainer>
    )
}
