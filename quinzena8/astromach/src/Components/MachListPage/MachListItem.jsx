import React from 'react'
import styled from 'styled-components';

const ListItemContainer = styled.div`
    display:flex;
    align-items:center;
    border-bottom: 1px solid gray;

    :hover {
        background-color: rgba(0,0,0,0,1);
    }
`

const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 8px;
    width: 30px;
`

export default function MachListItem(props) {
    const profile = props.profile
    return (
        <ListItemContainer>
            <Avatar src={profile.photo} alt=""/>
            <p>{profile.name}</p>
        </ListItemContainer>
    )
}
