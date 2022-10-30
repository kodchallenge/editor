import KodEditor from '@/components/editor/KodEditor'
import Header from '@/components/header/Header'
import Output from '@/components/output/Output'
import ProblemDescription from '@/components/problem/description/ProblemDescription'
import KodLayout from 'kod-layout'

const TwoColumnLayout = () => {
    return (
        <KodLayout.Base>
            <Header />
            <KodLayout.Row>
                <ProblemDescription />
                <KodLayout.Column>
                    <KodEditor />
                    <KodLayout.Tab>
                        <Output />
                    </KodLayout.Tab>
                </KodLayout.Column>
            </KodLayout.Row>
        </KodLayout.Base>
    )
}

export default TwoColumnLayout