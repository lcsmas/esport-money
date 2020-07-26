import { createSlice } from '@reduxjs/toolkit';
import { Games } from '../../db'

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        ids: Games.map( e => e.id ),
        entities: Games
    }
})

export const selectGames = state => state.game.entities;

export default gameSlice.reducer