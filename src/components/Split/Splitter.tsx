import { Vector2f } from '@/types/types';
import { css } from '@emotion/react';
import React, { useState } from 'react'

export type SplitterProps = {
    text?: string;
    dir: "horizontal" | "vertical";
    onSplitterDrag: (ev: MouseEvent, firstClick: Vector2f) => void 
}
const Splitter: React.FC<SplitterProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    const { children, text, dir, onSplitterDrag, ...divProps } = props
    const [firstClick, setFirstClick] = useState<Vector2f>({x: 0, y: 0})

    const handleDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setFirstClick({x: e.pageX, y: e.pageY})
        document.body.addEventListener("mousemove", handleDrag, true)
        document.body.style.cursor = dir == "vertical" ? "col-resize" : "row-resize"
        document.body.addEventListener("mouseup", () => {
            document.body.style.cursor = ""
            document.body.removeEventListener("mousemove", handleDrag, true)
            document.body.removeEventListener("mouseup", () => {}, true)
        }, true)
    }
    
    const handleDrag = (ev: MouseEvent) => {
        onSplitterDrag(ev, firstClick)
    }

    return (
        <div
            {...divProps}
            onMouseDown={handleDown}
            draggable={false}
            css={css`
                user-select: none;
                flex-basis: 5px;
                background-color: #ffffff50;
                cursor: ${dir == "vertical" ? "col-resize" : "row-resize"};
                &:hover, &:active, &:focus {
                    background-color: #ffffff;
                }
            `}
        >
            {text}
        </div>
    )
}

export default Splitter