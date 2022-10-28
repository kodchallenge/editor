import MonacoEditor from "@monaco-editor/react";
import KodLayout from 'kod-layout';
import { Dark } from "./themes/Dark";

const KodEditor = () => {
    return (
        <KodLayout.Tab className='editor'>
            <MonacoEditor
                // height={height}
                language={"javascript"}
                value={`//Write your code is here`}
                theme= "Dark"
                beforeMount={(monaco) => {
                    monaco.editor.defineTheme("Dark", Dark)
                }}
            />
        </KodLayout.Tab>
    )
}

export default KodEditor