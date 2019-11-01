import React from 'react';
import PlayerCards from './PlayerCards';

function MappedPlayerCards({ playerCards }) {
    return (
        <div className="mapped">
            {playerCards.map(eachWoman =>
                <PlayerCards eachWoman={eachWoman} />
            )}
        </div>
    )
}

export default MappedPlayerCards;