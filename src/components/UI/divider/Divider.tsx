import styled from '@emotion/styled'
import React from 'react'

export type DividerProps = {
    dir?: "vertical" | "horizontal"
}



const VerticalDivider = styled.hr`
    width: 100%;
    border: 0;
    height: 2px;
    background-color: #ffffff10;
    box-shadow: 0px 1px 5px 0px #2020203d;
`

export const Divider:React.FC<DividerProps> = (props) => {
    const {dir} = props

    return <VerticalDivider />;
}