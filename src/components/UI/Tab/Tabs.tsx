import styled from '@emotion/styled'
import React from 'react'

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  height: 100%;
`

const Item = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  text-align: center;
  background: transparent;
  border: none;
  position: relative;
  transition-duration: 0.5s;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    transition-duration: 0.5s;
    background: transparent;
  }
  &.active {
    background: #ffffff13;
    &::after {
      width: 100%;   
      background: #ffffff4f;   
    }
  }
`

export type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onChange"> & {
  names?: string[];
  value: number;
  onChange(value: number): void;
}

export const Tabs: React.FC<TabsProps> = ({ ...props }) => {
  const { names, value, onChange, ...others } = props

  return (
    <Root className='k-tabs' {...others}>
      {names?.map((item, index) => (
        <Item
          onClick={() => onChange(index)}
          key={index}
          className={`${value == index ? "active" : ""}`}
        >
          {item}
        </Item>
      ))}
    </Root>
  )
}