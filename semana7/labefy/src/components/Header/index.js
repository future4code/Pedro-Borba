import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const ButtonsContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonsContainer>
                <button onClick={() => props.changePage("playlistCreationPage")} >Cadastrar Playlist</button>
                <button onClick={() => props.changePage("playlistManagerPage")} >Gerenciar Playlists</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header