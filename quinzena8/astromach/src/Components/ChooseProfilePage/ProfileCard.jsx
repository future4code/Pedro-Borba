import React from 'react'
import styled from 'styled-components'

const ProfileCardContainer = styled.div`
    margin: 10px;
 `

const ProfilePicture = styled.img`
width: 100%;
max-width: 325px;

`

 function ProfileCard(props) {
    const profile = props.profile
    return (
        <ProfileCardContainer>
            <ProfilePicture src={profile.photo} alt=""/>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
        </ProfileCardContainer>
    )
}

export default ProfileCard;