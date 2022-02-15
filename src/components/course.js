import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Courseapi from '../Api/courseapi';
const Course = () => {
    const [courseapi] = useState(Courseapi);
    return (
        <>
            <div className="body" id="course-page">
                <div className="heading courses-heading">
                    <h1>Our Courses</h1>
                </div>
                <div className="courses">
                    {courseapi.map((CurElem) => {

                        return (

                            <div className="course-name">
                                <h2>{CurElem.CourseName}</h2>
                                <span>{CurElem.InventorName}</span><br />
                                <NavLink to={CurElem.CourseName}><button>Start Learning</button></NavLink>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Course

