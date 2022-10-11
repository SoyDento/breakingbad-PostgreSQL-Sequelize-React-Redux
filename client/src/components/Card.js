import React from 'react';
import { Link } from "react-router-dom";
import s from '../styles/Card.module.css';

export default function Card ({id, name, img, created_DB, closeChar, removeChar}) {
  // console.log(id);
  return(
    <div key={id} className={s.card}>
      <Link to={`/characters/${id}`}>
        <h3>{name}</h3>
        <div className={s.image}>
          <img src={img} alt='img not found'/>
        </div>
      </Link>
      <div className={s.bot}>
      {
        (created_DB) ?
          <button value={id} onClick={(e)=>removeChar(e)}>delete character from database</button>
          :
          <button value={id} onClick={(e)=>closeChar(e)}>close list character</button>
      }
      </div>

    </div>
  )
}
