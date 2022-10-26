import React from 'react'
import MonacoEditor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { OneDark } from './themes/OneDark';
import KodLayout from 'kod-layout'

const KodEditor = () => {

    return (
        <KodLayout.Tab className='editor'>
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
        </KodLayout.Tab>
    )
}

export default KodEditor