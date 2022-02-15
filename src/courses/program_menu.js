import React, { useState } from 'react'
import { C_program } from '../Api/Program';
export const Program_Menu = () => {
    const [navmenu] = useState(C_program);
    return (
        <>
            <div className="Code-Page-Navbar">

                {
                    navmenu.map((elem) => {
                        const { program_menu_title } = elem;

                        return (
                            <>
                                <li> <p>{program_menu_title}</p></li>
                            </>
                        )

                    })
                }
            </div>
        </>
    )
}
export default Program_Menu;