import React from 'react';
import $ from 'jquery';

const Navbar = () => {
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
                    <span className="comLink" onClick={
                        () => {
                            $("html,body").animate({
                                scrollTop: $("#home-page").offset().top - 60,
                            }, 2);
                        }
                    }>Home</span>
                    <span className="comLink" onClick={
                        () => {
                            $("html,body").animate({
                                scrollTop: $("#course-page").offset().top - 60,
                            }, 2);
                        }
                    }>Course</span>
                    <span className="comLink" onClick={
                        () => {
                            $("html,body").animate({
                                scrollTop: $("#contact-page").offset().top - 60,
                            }, 2);
                        }
                    }>Contact</span>
                </nav>
            </div>
        </>

    );
}

export default Navbar;
