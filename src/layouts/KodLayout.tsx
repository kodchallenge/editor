import Split from '@/components/Split/Split'

const KodLayout = () => {
	return (
		<div className='root'>
			<div className='container'>
				<header className='header'>Header</header>
				<div className='editor-body'>
					<div className='wrapper'>
						<Split dir='vertical'>
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
						</Split>
					</div>
				</div>
			</div>
		</div>
	)
}

export default KodLayout