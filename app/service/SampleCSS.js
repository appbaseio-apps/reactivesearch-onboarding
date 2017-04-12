export const SampleCSS = `body {
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
	-moz-osx-font-smoothing: grayscale;
	-moz-font-feature-settings: "liga" on;
}

nav {
	height: 40px;
	line-height: 22px;
	box-shadow: none;
	font-weight: bold;
	letter-spacing: 0.05em;
	font-size: 13px;
	z-index: 1;
	background-color: #FF6600;
	color: #fff;
	padding: 8px 25px;
}

.wrapper {
	width: 80%;
	max-width: 1400px;
	margin: 0 auto;
}
.wrapper .col.s12 {
	padding: 0;
}

.filters {
	padding: 4px 0;
	height: 56px;
	background-color: #fefefe;
}
.filters .rbc {
	margin: 0;
	background-color: transparent;
	box-shadow: none;
}
.filters .rbc .rbc-input {
	background-color: transparent;
	font-family: "Lato Regular";
	font-weight: normal;
}
.filters .rbc input[type=text]:focus:not([readonly]) {
	border: 0;
	box-shadow: none;
}
.filters .rbc.rbc-singledropdownlist {
	height: 40px !important;
	margin-top: 5px;
}
.filters .rbc.rbc-singledropdownlist .row {
	margin: 0;
}

.rbc-orange .rbc.rbc-resultstats {
	text-align: right;
	margin: 0;
	background-color: #fefefe;
	padding: 5px 15px;
	font-size: 14px;
	border-top: 1px solid #f3f3f3;
	border-bottom: 1px solid #fcfcfc;
}

.rbc.rbc-pagination {
	background: transparent;
	border: 0;
	box-shadow: none;
	text-align: center;
}

.rbc.rbc-resultlist {
	background-color: transparent;
	padding: 0;
	margin: 0;
}

.rbc-resultlist-container {
	max-height: none;
	background-color: #fff;
	box-shadow: none;
	border: 0;
	margin: 0;
}

.rbc-resultlist-scroll-container {
	height: auto !important;
}

.rbc-resultlist-scroll-container .rbc-resultlist-item {
	border-bottom: 1px solid #eaeaea;
	padding: 15px;
	cursor: auto;
}

.rbc-json-print {
  padding: 0 15px;
}
`;
