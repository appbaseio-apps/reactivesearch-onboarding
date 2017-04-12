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
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus qui laboriosam repellat, illo molestias nihil necessitatibus, delectus dolor accusantium ea.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<Remarkable source={SingleDropdownList}></Remarkable>
						</div>
						<div className="right-col">
							<img src="/assets/images/component-1.png" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laborum velit consequatur beatae, eligendi soluta cupiditate, quam nihil? Aspernatur, totam.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<Remarkable source={DataSearch}></Remarkable>
						</div>
						<div className="right-col">
							<img src="/assets/images/component-2.png" />
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laborum velit consequatur beatae, eligendi soluta cupiditate, quam nihil? Aspernatur, totam.</p>
						</div>
					</div>
				</div>
				{this.submitBtn()}
			</section>
		);
	}
}
