import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Game.module.css"

export function Game({
    imageSrc 
}){
    return (
        <img src={imageSrc} className={styles.img} onClick={() => ""}/>
    )
}