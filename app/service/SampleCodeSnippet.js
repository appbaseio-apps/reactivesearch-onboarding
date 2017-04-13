export const sampleCodeSnippet = `const {
	ReactiveBase,
	DataSearch,
	SingleDropdownList,
	ResultList } = ReactiveSearch;

const Testing = React.createClass({
	render: function () {
		return (
			<div className="container-fluid h-100 liveExample">
				<ReactiveBase
					app={{app}}
					credentials={{credentials}}
					type="post"
					theme="rbc-orange"
				>
					<nav className="wrapper">
						Hacker News
					</nav>
					<div className="filters wrapper row">
						<div className="col s9">
							<DataSearch
								componentId="InputSensor"
								appbaseField={["title", "text", "by"]}
								placeholder="Search posts by title, text or author..."
								autocomplete={false}
								highlight={true}
							/>
						</div>

						<div className="col s3">
							<SingleDropdownList
								componentId="TypeSensor"
								appbaseField="p_type.raw"
								size={20}
								selectAllLabel="All"
								defaultSelected="All"
							/>
						</div>
					</div>

					<div className="wrapper row">
						<div className="col s12">
							<ResultList
								appbaseField="title"
								from={0}
								size={50}
								pagination={true}
								onData={onData}
								react={{
									and: ["InputSensor", "TypeSensor"]
								}}
							/>

						</div>
					</div>
				</ReactiveBase>
			</div>
		)
	}
});

const onData = (res) => {
	const title = res.title && res.title.length ?
			res.url ?
				<a  className="title"
					target="_blank"
					href={res.url}
					dangerouslySetInnerHTML={{__html: res.title}}
				/> :
				res.p_type == "poll" ?
				<a  className="title"
					target="_blank"
					href={"https://news.ycombinator.com/item?id="+res.id}
					dangerouslySetInnerHTML={{__html: res.title}}
				/> :
				<div className="title" dangerouslySetInnerHTML={{__html: res.title}} />
			: null;
		return {
			image: null,
			title: title,
			desc: (<div>
				{ res.text ? <div className="text" dangerouslySetInnerHTML={{__html: res.text}} /> : null }
				<p className="info">
					{
						res.p_type == "comment" ?
						<span>parent <a target="_blank" href={"https://news.ycombinator.com/item?id="+res.parent}>{res.parent}</a><span className="separator">|</span></span>
						: null
					}
					{res.score} points<span className="separator">|</span>
					<a target="_blank" href={"https://news.ycombinator.com/user?id="+res.by}>{res.by}</a><span className="separator">|</span>
				</p>
			</div>)
		}
}

ReactDOM.render(
	<Testing></Testing>,
	document.getElementById('root')
);`;
