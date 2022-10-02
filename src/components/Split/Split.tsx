import { css } from "@emotion/react";
import React from "react";
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
    return (
        <div css={wrapperStyle({ dir })} {...otherProps}>
            {React.Children.map(children, (child, index) => (
                <>
                    <SplitPane basis={(sizes?.at(index) ?? 100 / count) + "%"}>
                        {child}
                    </SplitPane>
                    {index < count - 1 && <Splitter dir={dir} />}
                </>
            ))}
        </div>
    )
}

export default Split