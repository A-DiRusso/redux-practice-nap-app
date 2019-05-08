import React from 'react';

export default function ActivityComponent({
    activity,
    handleClickNap,
    handleClickEat,
    handleClickPlay,
}) {
    return (
        <div>
            <div>{activity}</div>
                <button onClick={handleClickEat}>EAT</button>
                <button onClick={handleClickNap}>NAP</button>
                <button onClick={handleClickPlay}>PLAY</button>
        </div>
    );
}