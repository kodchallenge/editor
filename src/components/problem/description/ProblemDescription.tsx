import KodLayout from 'kod-layout'
import KodMarkdown from 'kod-markdown'
import { css } from '@emotion/react'

const ProblemDescription = () => {
    return (
        <KodLayout.Tab>
            <div css={css`
                padding: 10px;
            `}>
                <KodMarkdown fromUrl='/sample.md'/>
            </div>
        </KodLayout.Tab>
    )
}

export default ProblemDescription