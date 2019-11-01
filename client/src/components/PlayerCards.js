import React from 'react';

function PlayerCards(props) {
    console.log(props);
    const { eachWoman: { name, country, searches } } = props
    return (
        <div className="player-card">
            <h2>{name}</h2>
            <p>{`Country: ${country}`}</p>
            <p>{`Number of Searches: ${searches}`}</p>
        </div>
    )
}

export default PlayerCards;