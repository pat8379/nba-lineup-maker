import React from 'react'
import { useSelector } from 'react-redux'
import { selectLineUp } from '../../features/lineup/lineUpSlice'
import { selectPlayers } from '../../features/players/playersSlice'


export default function EachLineUp({lDesc}) {
    const lineUps = useSelector(selectLineUp)
    const players = useSelector(selectPlayers)
    // console.log(lineUps[lDesc].playersInLineUp)
    const eachLineUp = lineUps[lDesc]
    const averageRating = eachLineUp.playersInLineUp.map((n) => {
        return Number(players[n].rating)
    })
    const average = averageRating.reduce((a, b) => a + b, 0) / averageRating.length
    // console.log(average)

    return (
        <>
            <p>{eachLineUp.lineUpName}</p>
            <ul>
                {eachLineUp.playersInLineUp.map((b) => (
                    <li>{players[Number(b)].player} - {players[Number(b)].rating} - {players[Number(b)].position}</li>

                ))}
            </ul>
            <p>Average Rating: {average}</p>
        </>
    )
}