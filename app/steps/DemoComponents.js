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
				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.setStep(4)}>
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
				<h2>Get started with our data-aware components</h2>

				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<Remarkable source={base}></Remarkable>
						</div>
						<div className="right-col">
							<p>ReactiveBase is the base component for all ReactiveMaps and ReactiveSearch apps. It binds the backend app (data source) with the UI view components (child elements to ReactiveBase), allowing the UI views to be reactively updated every time there is a change in the data source or in the UI view components.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<Remarkable source={SingleDropdownList}></Remarkable>
						</div>
						<div className="right-col">
							<img src="/assets/images/component-1.png" />
							<p>A SingleDropdownList sensor component creates a radio select list UI widget. It is used for filtering results based on the current selection from a list of items.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<Remarkable source={DataSearch}></Remarkable>
						</div>
						<div className="right-col">
							<img src="/assets/images/component-2.png" />
							<p>A DataSearch sensor component creates a searchbox UI widget with an autocomplete and keyword highlighting functionality. It is used for applying full-text search across one or more fields.</p>
						</div>
					</div>
				</div>
				{this.submitBtn()}
			</section>
		);
	}
}
