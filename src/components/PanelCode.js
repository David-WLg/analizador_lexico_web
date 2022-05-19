import React, { useContext, useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/clike/clike';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/display/placeholder'
import './PanelCode.css'
import { CodeContext } from '../context/CodeContext';

const PanelCode = () => {
    const { codeState, change } = useContext(CodeContext);

    
    return (
        <div className='panelcode'>
            <CodeMirror
                className='codemirror'
                value={ codeState }
                options={{
                    mode: 'text/x-c++src',
                    theme: 'material',
                    lineNumbers: true,
                    lineWrapping: true,
                    placeholder: 'C++ code goes here...'
                }}
                onBeforeChange={(editor, data, value) => {
                    change( value )
                }}
                onChange={(editor, data, value) => {
                    change( value );
                }}
            />
        </div>
    )
}

export default PanelCode