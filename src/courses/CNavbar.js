import React from 'react'
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Courseapi from '../Api/courseapi';
import { useState } from 'react';

export const CNavbar = () => {
    const [courseapi] = useState(Courseapi)
    return (
        <>
            <div className="menu">

                <div className="website-logo">
                    <img className="m-i" alt="logo" src="./img/Logo.png" />
                </div>
                <div className="menu-button" onClick={() => {
                    $("#navbar span").slideToggle("slow");
                }}>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>

            </div>
            <div id="navbar">
                <nav >
                    <span> <NavLink className="comLink CNavbarElm CNHome" to="/">Home</NavLink></span>
                    {courseapi.map((CurElem) => {
                        return (
                            <span>  <NavLink className="comLink CNavbarElm" activeClassName='is-active' to={CurElem.CourseName}>{CurElem.CourseName}</NavLink></span>
                        )
                    })}
                </nav>
            </div>
        </>
    )
}
export default CNavbar;