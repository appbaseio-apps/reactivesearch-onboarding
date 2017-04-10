import { storageService } from './StorageService';
import { urlShare } from './UrlShare';
import { sampleCodeSnippet } from './SampleCodeSnippet';

class DataOperation {
	constructor() {
		this.user = null;
		this.app = null;
		this.defaultApp = {
			"appName": "testr1",
			"username": "mnFcuMCIG",
			"password": "49e6e356-adff-45b0-b5d0-5f4836d277b1",
			"type": "test"
		}
		$.ajaxSetup({
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			}
		});
		this.sampleCodeSnippet = sampleCodeSnippet;
	}

	getUser() {
		return $.ajax({
			type: "GET",
			url: 'https://accapi.appbase.io/user',
			dataType: 'json',
			contentType: "application/json"
		});
	}

	logout() {
		return $.ajax({
			type: "GET",
			url: 'https://accapi.appbase.io/logout?next=',
			dataType: 'json',
			contentType: "application/json"
		});
	}

	createApp(appname) {
		return $.ajax({
			type: "PUT",
			url: 'https://accapi.appbase.io/app/' + appname,
			dataType: 'json',
			contentType: "application/json"
		});
	}

	updateUser(user) {
		this.user = user;
	}

	updateApp(app) {
		this.app = app;
	}

	updateMapping(type, mappingObj) {
		let credentials = this.app.username + ':' + this.app.password;
		this.app.type = type;
		return $.ajax({
			type: "POST",
			url: 'https://scalr.api.appbase.io/' + this.app.appName + '/_mapping/' + type + '?ignore_conflicts=true&update_all_types=true',
			dataType: 'json',
			contentType: "application/json",
			headers: {
				'Authorization': 'Basic ' + btoa(credentials)
			},
			data: JSON.stringify(mappingObj)
		});
	}

	indexData(data) {
		let credentials = this.app.username + ':' + this.app.password;
		let finalData = [];
		data.forEach((record) => {
			let indexObj = {
				index: {}
			};
			finalData.push(indexObj);
			finalData.push(record);
		});
		var appbaseRef = new Appbase({
			"url": "https://scalr.api.appbase.io",
			"appname": this.app.appName,
			"username": this.app.username,
			"password": this.app.password
		});
		return appbaseRef.bulk({
			type: this.app.type,
			body: finalData
		});
	}

	createUrl(cb) {
		let obj = {
			url: 'https://' + this.app.username + ':' + this.app.password + '@scalr.api.appbase.io',
			appname: this.app.appName,
			version: '2.4.0'
		};
		if (this.app.type) {
			obj.selectedType = [this.app.type];
			obj.selectedTypes = [this.app.type];
		}
		urlShare.setInputs(obj, cb);
	}

	appConfig() {
		let app = this.app ? this.app : this.defaultApp;
		return {
			"app": app.appName,
			"credentials": `${app.username}:${app.password}`,
			"type": app.type
		};
	}

	htmlSnippet(method) {
		let min_html = `<div id="root"></div>`;
		let max_html = `<!doctype html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="shortcut icon" href="assets/images/favicon.ico" />
	<title>Reactive Search Sample</title>
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
	<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/appbaseio/reactivesearch/master/dist/css/style.min.css" />
	<!-- JavaScript -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js"></script>
	<script type="text/javascript" src="https://cdn.rawgit.com/appbaseio/reactivesearch/master/umd/ReactiveSearch.js"></script>
</head>
<body>
	<div id="root"></div>
</body>

</html>`;

		if (method === 'full') {
			return max_html;
		}
		return min_html;
	}
	resources() {
		let resources = [
			'https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js',
			'https://cdn.rawgit.com/appbaseio/reactivesearch/master/umd/ReactiveSearch.js',
			'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css',
			'https://rawgit.com/appbaseio/reactivesearch/master/dist/css/style.min.css',
		];
		return resources.join(',');
	}
	appSnippet() {
		let obj = this.appConfig();
		let data = this.sampleCodeSnippet;
		for(let field in obj) {
			data = data.replace('{{'+field+'}}', '"'+obj[field]+'"');
		}
		return data;
	}
}

export const dataOperation = new DataOperation();
