import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGames } from "./gameSlice"
import { Game } from "./Game"
import styles from "./Game.module.css"

export function GameList(){
    const games = useSelector(selectGames);
    return ( 
        <div className={styles.gamelist}>
            { games.map( g => <Game imageSrc={g.img}/> ) }
        </div>);
}