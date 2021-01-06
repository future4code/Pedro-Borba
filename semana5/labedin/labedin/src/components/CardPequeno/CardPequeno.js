import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="bicard-container">
            <div>
                <h4>{ props.descricao }</h4>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;