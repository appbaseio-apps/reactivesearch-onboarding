import React, { Component } from "react";
import Remarkable from "react-remarkable";
import { dataOperation } from "../service/DataOperation";
import { data } from "../service/indexData";

const base = `
	<ReactiveBase
		app="hn"
		credentials="YOzeIAmyn:f1955c6b-03e7-4eb8-90ca-bfcc28a0ba0c"
		type="post"
		theme="rbc-orange"
	>
	</ReactiveBase>
`;

const SingleDropdownList = `
	<SingleDropdownList
		componentId="TypeSensor"
		appbaseField="p_type"
		size={100}
		selectAllLabel="All"
		defaultSelected="All"
	/>
`;

const DataSearch = `
	<DataSearch
		componentId="InputSensor"
		appbaseField={["title", "text", "by"]}
		placeholder="Search posts by title, text or author..."
		autocomplete={false}
	/>
`;

const ResultList = `
	<ResultList
		appbaseField="title"
		from={0}
		size={20}
		pagination={true}
		onData={this.onData}
		react={{
			and: ["InputSensor", "TypeSensor"]
		}}
	/>
`;

export default class DemoComponents extends Component {
	submit() {
		this.props.toggleLoader("Assembling data and components for your app. Hold tight!");
		dataOperation.indexData(data)
		.on('data', (res) => {
			this.props.nextStep();
		})
		.on('error', (err) => {
			console.error("bulk failed: ", err);
		});
	}

	submitBtn() {
		let btn;
		if (this.props.completedStep >= 2) {
			btn = (
				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.setStep(3)}>
					Next
				</button>
			);
		} else {
			btn = (
				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.submit()}>
					Next
				</button>
			);
		}
		return btn;
	}

	render() {
		return (
			<section className="single-step">
				<h2>Let us assemble all the components</h2>

				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<Remarkable source={base}></Remarkable>
						</div>
						<div className="right-col">
							<p>ReactiveBase is the first component in any ReactiveSearch (or Maps) app, it connects the UI layer with the appbase.io data backend.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<Remarkable source={SingleDropdownList}></Remarkable>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/kquzzEU.png" />
							<p><strong>SingleDropdownList</strong> is a dropdown UI component. We will use this to create a search filter by stories, comments, etc. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/SingleDropdownList.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<Remarkable source={DataSearch}></Remarkable>
						</div>
						<div className="right-col">
							<img className="big" src="https://i.imgur.com/AxAJkte.png" />
							<p><strong>DataSearch</strong> is a searchbox UI component that can search on one or more fields, and comes with optional auto-complete suggestions and result highlighting support. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/DataSearch.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<Remarkable source={ResultList}></Remarkable>
						</div>
						<div className="right-col">
							<img className="big" src="https://i.imgur.com/l0wLoZ4.png" />
							<p><strong>ResultList</strong> allows us the search matches in a list format, it supports pagination, infinite scrolling as well as sorting options. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/ReactiveList.html" target="_blank">here</a>.</p>
						</div>
					</div>
				</div>
				{this.submitBtn()}
			</section>
		);
	}
}
