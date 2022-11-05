import KodLayout from 'kod-layout'
import KodMarkdown from 'kod-markdown'
import { css } from '@emotion/react'

const tabCss = css`
    overflow: auto !important;
`

const ProblemDescription = () => {
    return (
        <KodLayout.Tab id='description-area' css={tabCss}>
            <div css={css`
                padding: 10px;
            `}>
                <KodMarkdown fromUrl='/sample.md' theme='dark'/>
            </div>
        </KodLayout.Tab>
    )
}

export default ProblemDescription