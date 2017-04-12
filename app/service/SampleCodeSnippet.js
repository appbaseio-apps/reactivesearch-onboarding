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
								react={{
									and: ["InputSensor"]
								}}
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

ReactDOM.render(
	<Testing></Testing>,
	document.getElementById('root')
);`;
