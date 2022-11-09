import styled from '@emotion/styled'
import React from 'react'
import { useState } from 'react'
import CustomInput from '../Tabs/custom-input/CustomInput'
import KodButton from '../UI/button/KodButton'
import { Divider } from '../UI/divider'
import { TabContent, Tabs } from '../UI/Tab'
import Console from '../Tabs/console/Console'

const Root = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: auto;
    padding: 0px 10px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const HeaderItem = styled.div`
    display: flex;
    gap: 10px;
`

const Tab = styled.div`
    position: relative;
    flex-grow: 1;
`
const TabItem = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
`

export type OutputTab = {
    name: string;
    element: React.ReactElement;
}

export type OutputProps = {

}
const Output:React.FC<OutputProps> = () => {
    const [tabValue, setTabValue] = useState<number>(0)
    const [tabs] = useState<OutputTab[]>([
        {
            name: "Konsol",
            element: <Console />
        },
        {
            name: "Test Case",
            element: <CustomInput />
        }
    ])
    const handleChange = (value: number) => {
        setTabValue(value)
    }

    return (
        <Root>
            <Header>
                <Tabs onChange={handleChange} value={tabValue} names={tabs.map(x => x.name)}/>
                <HeaderItem>
                    <KodButton>Run</KodButton>
                    <KodButton status='success'>Submit</KodButton>
                </HeaderItem>
            </Header>
            <Divider />
            {tabs.map((tab, i) => (
                <TabContent value={i} index={tabValue}>
                    {tab.element}
                </TabContent>
            ))}
        </Root>
    )
}

export default Output