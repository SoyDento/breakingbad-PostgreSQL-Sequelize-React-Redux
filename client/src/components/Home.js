import React, { useEffect } from "react";
import logo from "../img/logo.png";
import s from "../styles/Home.module.css";
import {addQuote} from "../actions";
import { connect } from "react-redux";
import Spinner from './Spinner';
//import { useSelector } from "react-redux";

//---- combinamos funcionalidades de Class Component a este Funcional Component y no usamos Hooks

function Home(props) {
  // useSelector para traerse el estado.
  // const {quote} = useSelector((state)=>state)

  // También se puede usar esta alternativa
  // const quote = useSelector((state)=>state.quote)

  // useDispatch para llamar a las acciones
  // const dispatch = useDispatch();

  useEffect(()=>{
    //Forma de despachar la acción sin hook dispatch, sino con el "conect" de react-redux
    setTimeout(function(){
          props.addQuote();
          console.log("Here is the quote", props.quote);
      }, 2500);
  },[props])

  return (
    <div className={s.Home}>
      <img src={logo} alt="" className={s.HomeLogo} />
      <hr/>
      {
        props.quote ?
        <div className={s.Home}>
          <h2>"{props.quote.quote}"</h2>
          <h3>{props.quote.author}</h3>
          <p>From: {props.quote.series}</p>
        </div>
        : <Spinner/>
      }
      <div className={s.esp}> </div>
      <div className={s.pie}>
          <h6>This is a practice of Matías Dentoni | "I thank the creators of this exercise that has helped me to train myself in JS / REACT / REDUX / AJAX / POSTGREE / SQL / SEQUELIZE and the processes of Routing, Bundlers, Life Cycle Components"</h6>
      </div>
    </div>
  );
}


//Devolviendo un objeto, cuyo parámetro quote va a ser igual al quote del estado global
//Con connect ese objeto devuelto pasa a formar parte de las props

function mapStateToProps(state){
  return {
    ...state
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    addQuote: () => dispatch(addQuote())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
