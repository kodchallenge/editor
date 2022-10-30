import KodLayout from 'kod-layout'
import KodMarkdown from 'kod-markdown'
import { css } from '@emotion/react'

const ProblemDescription = () => {
    return (
        <KodLayout.Tab>
            <div css={css`
                padding: 10px;
                margin-bottom: 50px;
            `}>
                <KodMarkdown fromUrl='/sample.md' theme='dark'/>
            </div>
        </KodLayout.Tab>
    )
}

export default ProblemDescription