// import React from "react";
import React, { Component } from 'react';
import s from  "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render(){
    return (
      <div className={s.navbar}>
        <div className={s.link}><Link to="/">Home</Link></div>
        <div className={s.link}><Link to="/characters">Characters</Link></div>
        <div className={s.link}><Link to="/episodes">Episodes</Link></div>
        <div className={s.link}><Link to="/create">Create New Character</Link></div>
      </div>
    );
  }
};
//
// function NavBar() {
//   return (
//     <div className="navbar">
//       <div><Link to="/">Home</Link></div>
//       <div><Link to="/characters">Characters</Link></div>
//       <div><Link to="/episodes">Episodes</Link></div>
//       <div><Link to="/create">Create New Character</Link></div>
//     </div>
//   );
// }

export default NavBar;
