import React from 'react';
import './style.css';
import './components/components-style.css';
import './components/components-responsive-style.css'
import Navbar from './components/navbar';
import Course from './components/course';
import Contact from './components/contact';
import Footer from './components/footer';
import C from './courses/CodePage';
import CPP from './courses/CodePage';
import JAVA from './courses/CodePage';
import CNavbar from './courses/CNavbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Main() {

    return (
        <>

            <Router>
                <Switch>
                    <Route exact path="/C" element={<C />}>
                        <CNavbar />
                        <C />
                    </Route>
                    <Route exact path="/cpp" element={<CPP />}>
                        <CNavbar />
                        < CPP />
                    </Route>
                    <Route exact path="/JAVA" element={<JAVA />}>
                        <CNavbar />
                        < JAVA />
                    </Route>





                    <Route exact path="/">
                        {/* navbar */}
                        <Navbar />
                        {/* home */}
                        <div className="home" id="home-page" style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/img/bg.jpg'})`
                        }}>
                        </div>
                        {/* courses */}
                        <Course />
                        {/* contact */}
                        <Contact />
                        {/* footer */}
                        <Footer />
                    </Route>

                </Switch>
            </Router>
        </>
    )
}

export default Main;
