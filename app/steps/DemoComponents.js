import React, { Component } from "react";
import Remarkable from "react-remarkable";
import { dataOperation } from "../service/DataOperation";
import { data } from "../service/indexData";

const base = `
	<ReactiveBase
		app="hacker-news"
		credentials="Nt7ZtBrAn:5656435e-0273-497e-a741-9a5a2085ae84"
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

export default class DemoComponents extends Component {
	submit() {
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
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis laborum velit consequatur beatae, eligendi soluta cupiditate, quam nihil? Aspernatur, totam.</p>
						</div>
					</div>
				</div>
				{this.submitBtn()}
			</section>
		);
	}
}
