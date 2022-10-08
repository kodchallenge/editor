import { Vector2f } from "@/types/types";
import { css } from "@emotion/react";
import React, { useRef, useState } from "react";
import SplitPane from "./SplitPane";
import Splitter from "./Splitter";


const wrapperStyle = (p: any) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${p.dir == "vertical" ? "row" : "column"};
`

export type SplitProps = {
    dir: "vertical" | "horizontal";
    sizes?: number[];
}
const Split: React.FC<SplitProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    const { children, dir, sizes, ...otherProps } = props
    const count = React.Children.count(children)
    const rootRef = useRef<HTMLDivElement>(null)
    const [paneSizes, setPaneSizes] = useState<number[]>(sizes ?? Array.from({length: count}, () => 100 / count))

    const handleSplitter = (index:number, ev:MouseEvent, firstClickPosition: Vector2f) => {
        if(!rootRef || !rootRef.current) return;
        const rootRect = rootRef.current.getBoundingClientRect()
        const newSizes = [...paneSizes]
        const percentage = newSizes.filter((_, i) => i<=index).reduce((a, b) => a+b, 0)
        console.log(percentage)
        const oldPane1Size = newSizes[index]
        newSizes[index] = (dir === "vertical" ? ev.pageX / rootRect.width : ev.pageY / rootRect.height) * 100
        newSizes[index+1] -= newSizes[index] - oldPane1Size
        setPaneSizes([...newSizes])
    }

    return (
        <div ref={rootRef} css={wrapperStyle({ dir })} {...otherProps}>
            {React.Children.map(children, (child, index) => (
                <>
                    <SplitPane basis={paneSizes?.at(index) + "%"}>
                        {child}
                    </SplitPane>
                    {index < count - 1 && <Splitter onSplitterDrag={(ev, fc) => handleSplitter(index, ev, fc)} dir={dir} />}
                </>
            ))}
        </div>
    )
}

export default Split