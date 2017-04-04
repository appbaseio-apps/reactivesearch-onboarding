import React, { Component } from "react";
import data from "../service/sampleData";
import { dataOperation } from '../service/DataOperation';
import { settings } from "../service/analyzerSettings";
import { mapping } from "../service/mappingObj";

export default class SampleDataContainer extends Component {
	renderData() {
		return data.map(row => (
			<tr key={row.id}>
				<td>{row.id}</td>
				<td>{row.time}</td>
				<td>{row.p_type}</td>
				<td>{row.score}</td>
				<td>{row.by}</td>
				<td>{row.title}</td>
				<td>{row.url}</td>
			</tr>
		))
	}

	submit() {
		dataOperation.closeIndex()
		.then(() => dataOperation.updateSettings("post", settings))
		.then(() => dataOperation.openIndex())
		.then(() => dataOperation.updateMapping("post", mapping))
		.then((res) => {
			this.props.nextStep();
		})
		.catch((err) => {
			console.log(err);
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
				<h2>Sample Dataset for Hacker News</h2>
				<p>
					First things first, we will start by creating an appbase.io app. This is where all the data will reside once our <b>reactivesearch</b> app is up and running.
				</p>
				<table className="highlight responsive-table">
					<thead>
						<tr>
							<th>id</th>
							<th>time</th>
							<th>post type</th>
							<th>score</th>
							<th>by</th>
							<th>title</th>
							<th>url</th>
						</tr>
					</thead>
					<tbody>
						{this.renderData()}
					</tbody>
				</table>

				{this.submitBtn()}
			</section>
		);
	}
}
