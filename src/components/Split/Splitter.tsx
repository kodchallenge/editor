import { css } from '@emotion/react';
import React from 'react'

export type SplitterProps = {
    text?: string;
    dir: "horizontal" | "vertical"
}
const Splitter: React.FC<SplitterProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    const {children, text, dir, ...divProps} = props

    return (
        <div 
            {...divProps}
            css={css`
                flex-basis: 5px;
                background-color: #ffffff50;
                cursor: ${dir == "vertical" ? "col-resize" : "row-resize"};
                &:hover {
                    background-color: #ffffff;
                }
            `}
        >
            {text}
        </div>
    )
}

export default Splitter