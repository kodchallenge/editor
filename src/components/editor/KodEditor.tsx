import React from 'react'
import MonacoEditor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { OneDark } from './themes/OneDark';

const KodEditor = () => {

    return (
        <div className='editor'>
            <MonacoEditor
                // height={height}
                language={"javascript"}
                value={`//Write your code is here`}
                theme= "vs-dark"
                beforeMount={(monaco) => {
                    monaco.editor.defineTheme("OneDark", OneDark)
                }}
                // onMount={(editor, monaco) => {
                //     editorRef.current = editor
                // }}
            />
        </div>
    )
}

export default KodEditor