import { css } from '@emotion/react';
import styled from '@emotion/styled'
import React from 'react'

const BaseButton = styled.button`
all: unset;
padding: 10px 15px;
border-radius: 5px;
box-shadow: 1px 1px 3px 0px #00000050;
cursor: pointer;
tranform: translateY(0px);
background-color: #4B33DF;
color: white;
transition-duration: 0.25s;
&:hover {
    box-shadow: 1px 1px 10px 0px #00000050;
}
&:active {
    box-shadow: 1px 1px 1px 0px #00000050;
    tranform: translateY(-1px)
}
&.primary {
    background-color: #
}
`

export type KodButtonProps = {
    status?:  "primary" | "secondary" | "danger" | "info" | "success" | "dark" | "light";
    size?: "small" | "medium" | "large";
    rounded?: boolean;
    disabled?: boolean;
}

const buttonSizes = {
    small: 12,
    medium: 16,
    large: 20
}

const KodButton: React.FC<KodButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
    const {children, status, rounded, size, ...btnProps} = props 

    return (
        <BaseButton 
        disabled
            {...btnProps}
        css={theme => ({
            backgroundColor: theme.colors[status ?? "primary"],
            color: status == "light" ? "#333" : "#f2f2f2",
            borderRadius: rounded ? 20 : 5,
            fontSize: buttonSizes[size ?? "medium"]
        })}
        >
            {children}
        </BaseButton>
    )
}
export default KodButton