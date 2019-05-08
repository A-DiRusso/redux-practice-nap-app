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
                <button onClick={handleClickEat}>Eat</button>
                <button onClick={handleClickNap}>Nap</button>
                <button onClick={handleClickPlay}>Play</button>
        </div>
    );
}