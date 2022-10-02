import { css } from '@emotion/react'
import React from 'react'

const paneStyle = (p:any) => css`
    flex: 1 1 ${p.basis};
`

export type SplitPaneProps = {
    basis: string;
}
const SplitPane: React.FC<SplitPaneProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    const {children, basis, ...divProps} = props
    return (
        <div css={paneStyle({basis})} {...divProps}>
            {children}
        </div>
    )
}

export default SplitPane