import React, { useState } from 'react'
import { C_program, CPP_program, JAVA_program } from '../Api/Program';
import Program_Menu from './program_menu';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/'

// c language
const C = () => {
    const [item] = useState(C_program);
    const copymsg = () => {
        toast.success('Code Copied', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
    }
    return (
        <>
            <div className="body">
                <div className="Code-Page">

                    {/* Program menu */}

                    <Program_Menu />

                    {/* ....... */}

                    {/* code and description */}
                    <div className="Code-Page-Content">
                        <ToastContainer />

                        {
                            item.map((elem) => {
                                const { id, programTitle, programDesc, code, programOutput } = elem;

                                return (
                                    <>

                                        {/* Program title */}
                                        <div className="Code-Page-Title" >
                                            <h1>{id}   {programTitle}</h1>
                                        </div>
                                        {/* ........ */}

                                        {/* program description */}
                                        <div className="Code-Page-description">
                                            <p>{programDesc}</p>
                                        </div>
                                        {/* .......... */}

                                        {/*program source code*/}
                                        <div className="Code-Page-Program">

                                            <CopyToClipboard text={code}>
                                                <div><img className="copybtn" onClick={copymsg} alt="copy button" src="../img/copybtn.png" /></div>
                                            </CopyToClipboard>
                                            <div>
                                                <SyntaxHighlighter className="syntax" language="c" style={dark}>
                                                    {code}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>

                                        {/* .......... */}

                                        {/* program output */}
                                        <div className="Code-Page-Program-Output">
                                            <span>Output</span><br />
                                            <p>
                                                <code>
                                                    {programOutput}
                                                </code>
                                            </p>
                                        </div>
                                        {/* ............... */}
                                    </>
                                )


                            })
                        }
                    </div>
                    {/* ........ */}

                    {/* Ad section */}
                    <div className="Code-page-Ad">

                    </div>
                    {/* ......... */}

                </div>

            </div>

        </>
    );
}
//...............................//

const CPP = () => {
    const [item] = useState(CPP_program);
    const copymsg = () => {
        toast.success('Code Copied', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
    }
    return (
        <>
            <div className="body">
                <div className="Code-Page">

                    {/* Program menu */}

                    <Program_Menu />

                    {/* ....... */}

                    {/* code and description */}
                    <div className="Code-Page-Content">
                        <ToastContainer />

                        {
                            item.map((elem) => {
                                const { id, programTitle, programDesc, code, programOutput } = elem;

                                return (
                                    <>

                                        {/* Program title */}
                                        <div className="Code-Page-Title" >
                                            <h1>{id}   {programTitle}</h1>
                                        </div>
                                        {/* ........ */}

                                        {/* program description */}
                                        <div className="Code-Page-description">
                                            <p>{programDesc}</p>
                                        </div>
                                        {/* .......... */}

                                        {/*program source code*/}
                                        <div className="Code-Page-Program">

                                            <CopyToClipboard text={code}>
                                                <div><img className="copybtn" onClick={copymsg} alt="copy button" src="../img/copybtn.png" /></div>
                                            </CopyToClipboard>
                                            <div>
                                                <SyntaxHighlighter className="syntax" language="c" style={dark}>
                                                    {code}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>

                                        {/* .......... */}

                                        {/* program output */}
                                        <div className="Code-Page-Program-Output">
                                            <span>Output</span><br />
                                            <p>
                                                <code>
                                                    {programOutput}
                                                </code>
                                            </p>
                                        </div>
                                        {/* ............... */}
                                    </>
                                )


                            })
                        }
                    </div>
                    {/* ........ */}

                    {/* Ad section */}
                    <div className="Code-page-Ad">

                    </div>
                    {/* ......... */}

                </div>

            </div>

        </>
    );
}
// ..................................//

// jAVA program

const JAVA = () => {
    const [item] = useState(JAVA_program);
    const copymsg = () => {
        toast.success('Code Copied', { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
    }
    return (
        <>
            <div className="body">
                <div className="Code-Page">

                    {/* Program menu */}

                    <Program_Menu />

                    {/* ....... */}

                    {/* code and description */}
                    <div className="Code-Page-Content">
                        <ToastContainer />

                        {
                            item.map((elem) => {
                                const { id, programTitle, programDesc, code, programOutput } = elem;

                                return (
                                    <>

                                        {/* Program title */}
                                        <div className="Code-Page-Title" >
                                            <h1>{id}   {programTitle}</h1>
                                        </div>
                                        {/* ........ */}

                                        {/* program description */}
                                        <div className="Code-Page-description">
                                            <p>{programDesc}</p>
                                        </div>
                                        {/* .......... */}

                                        {/*program source code*/}
                                        <div className="Code-Page-Program">

                                            <CopyToClipboard text={code}>
                                                <div><img className="copybtn" onClick={copymsg} alt="copy button" src="../img/copybtn.png" /></div>
                                            </CopyToClipboard>
                                            <div>
                                                <SyntaxHighlighter className="syntax" language="c" style={dark}>
                                                    {code}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>

                                        {/* .......... */}

                                        {/* program output */}
                                        <div className="Code-Page-Program-Output">
                                            <span>Output</span><br />
                                            <p>
                                                <code>
                                                    {programOutput}
                                                </code>
                                            </p>
                                        </div>
                                        {/* ............... */}
                                    </>
                                )


                            })
                        }
                    </div>
                    {/* ........ */}

                    {/* Ad section */}
                    <div className="Code-page-Ad">

                    </div>
                    {/* ......... */}

                </div>

            </div>

        </>
    );
}
// ..........................................//

















export default C;
export { C, CPP, JAVA }