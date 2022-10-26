// import Split from '@/components/Split/Split'

import KodEditor from "@/components/editor/KodEditor"
import InformationPage from "@/components/Pages/InformationPage"
import Split from "react-split"

const KodLayout = () => {
	return (
		<div className='root'>
			<div className='container'>
				<header className='header'>Header</header>
				<div className='editor-body'>
					<div className='wrapper'>
						<Split
							className="editor-split split"
							gutterSize={3}
							minSize={0}
							snapOffset={200}
						>
							<div className='split-pane problem-root'>
								{/* <InformationPage /> */}
								{/* <div className='problem-body'>
									<div className='problem-content'>
										asdasd
									</div>
								</div> */}
							</div>
							<div className='split-pane editor-root'>
								<Split
									direction="vertical"
									sizes={[60, 40]}
									gutterSize={3}
									snapOffset={0}
									className="split"
								>
									<KodEditor />
									<div className='console-body'> asd asdas asd as das das dasd as
									</div>
								</Split>
							</div>
						</Split>
						{/* <Split dir='vertical'>
							<div className='split-pane problem-root'>
								<div className='problem-body'>
									<div className='problem-content'>
										asdasd
									</div>
								</div>
							</div>
							<div className='split-pane editor-root'>
								<Split dir='horizontal' sizes={[60, 40]}>
									<div className='editor'>
										asdasd123
									</div>
									<div className='console-body'> asd asdas asd as das das dasd as
									</div>
								</Split>
							</div>
							<div />
						</Split> */}
					</div>
				</div>
			</div>
		</div>
	)
}

// export default KodLayout