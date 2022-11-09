import styled from '@emotion/styled';
import React from 'react'


const Root = styled.section`
    position: relative;
    flex-grow: 1;
`

const Item = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    width: 100%;
    height: 100%;
`

export type TabContentProps = React.HTMLAttributes<HTMLSelectElement> & {
    value: number;
    index: number;
}

export const TabContent: React.FC<TabContentProps> = ({ ...props }) => {
    const { value, index, children, ...others } = props

    if (value !== index) {
        return <React.Fragment />
    }

    return (
        <Root {...others}>
            <Item>
                {children}
            </Item>
        </Root>
    )
}