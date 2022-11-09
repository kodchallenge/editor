import useClickAway from '@/hooks/useClickAway'
import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'

const Root = styled.div`
    background: #25283c;
    position: relative;
    width: 120px;
    padding: 10px;
    border-radius: 2px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0px 0px 10px 0px #25283c61;
    & > i {
        margin-right: 10px;
    }
`

const List = styled.ul`
    list-style-type: none;
    position: absolute;
    inset: 0;
    top: calc(100% + 3px);
    padding: 0;
    margin: 0;
    z-index: 99;
    background: #25283c;
    color: #f2f2f2;
    height: max-content;
    border-radius: 2px;
    cursor: pointer;
    overflow: hidden;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0px 0px 10px 0px #25283c61;
    &>li {
        padding: 10px;
        border-bottom: 2px solid #ffffff1a;
        &:hover {
            background: #ffffff1a;
        }
        &.active {
            background: #ffffff1a;

        }
    }
    &>li:last-child {
        border-bottom: none;
    }
`

const SelectView = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SelectText = styled.span`
    display: flex;
    flex-grow: 1;
    & i {
        margin-right: 15px;
        transform: rotate(15deg) scale(0.75);
        opacity: 0.75;
    }
`

export type SelectProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onChange"> & {
    data: string[]
    onChange(value: string, index: number): void;
    value: number;
}

export const Select: React.FC<SelectProps> = ({...props}) => {
    const {data, onChange, value, ...others} = props
    const [open, setOpen] = useState<boolean>(false)



    const handleRootClick = () => {
        setOpen(o => !o)
    }

    const handleListItemClick = (val: string, index: number) => {
        onChange(val, index)
    }

    const rootRef = useRef<HTMLDivElement | null>(null)
    useClickAway(rootRef, () => {
        setOpen(false)
    })
    return (
        <Root ref={rootRef} onClick={handleRootClick} {...others}>
            <SelectView>
                <link href='https://css.gg/chevron-down.css' rel='stylesheet'></link>
                <SelectText>
                    {data[value] ?? ""}
                </SelectText>
                <i className="gg-chevron-down"></i>
            </SelectView>
            {open && (
                <List>
                    {data.map((item, index) => (
                        <li onClick={() => handleListItemClick(item, index)} key={index} className={`${index == value ? "active" : ""}`}>{item}</li>
                    ))}
                </List>
            )}
        </Root>
    )
}