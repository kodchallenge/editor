import { css } from "@emotion/react";
import React, { useState } from "react";
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
    
    const [paneSizes, setPaneSizes] = useState<number[]>(sizes ?? Array.from({length: count}, () => 100 / count))

    return (
        <div css={wrapperStyle({ dir })} {...otherProps}>
            {React.Children.map(children, (child, index) => (
                <>
                    <SplitPane basis={paneSizes?.at(index) + "%"}>
                        {child}
                    </SplitPane>
                    {index < count - 1 && <Splitter dir={dir} />}
                </>
            ))}
        </div>
    )
}

export default Split