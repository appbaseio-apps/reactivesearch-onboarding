export const sampleCodeSnippet = `const {
	ReactiveBase,
	TextField,
	SingleDropdownList,
	ResultList } = reactivesearch;

const Testing = React.createClass({
	newsQuery(value) {
		if(value) {
			return {
				multi_match: {
					query: value,
					fields: ["title", "text", "by"]
				}
			};
		} else {
			return null;
		}
	},
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
							<TextField
								componentId="InputSensor"
								appbaseField="title"
								placeholder="Search posts by title, text or author..."
								customQuery={this.newsQuery}
							/>
						</div>

						<div className="col s3">
							<SingleDropdownList
								componentId="TypeSensor"
								appbaseField="p_type.raw"
								size={100}
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
								showPagination={true}
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
})

ReactDOM.render(
	<Testing></Testing>,
	document.getElementById('root')
);`;
