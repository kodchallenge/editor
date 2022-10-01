import { css } from '@emotion/react'
import React from 'react'

export type KodButtonProps = {

}
const KodButton: React.FC<KodButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
    const {children, ...btnProps} = props 

    return (
        <button 
            {...btnProps}
             css={css`
                all: unset;
                padding: 5px 10px;
                border-radius: 10px;
                box-shadow: 1px 1px 3px 0px #00000050;
                cursor: pointer;
                tranform: translateY(0px)
                &:hover {
                    box-shadow: 1px 1px 10px 0px #00000050;
                }
                &:active {
                    box-shadow: 1px 1px 1px 0px #00000050;
                    tranform: translateY(-1px)
                }
             `}
        >
            {children}
        </button>
    )
}
export default KodButton