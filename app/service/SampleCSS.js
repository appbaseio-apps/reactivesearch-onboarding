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

.rbc.rbc-resultlist-wrapper {
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

.rbc-resultlist-scroll-container .rbc-resultlist {
	border-bottom: 1px solid #eaeaea;
	padding: 15px;
	cursor: auto;
}

.rbc-resultlist-scroll-container .rbc-resultlist .rbc-resultlist__image {
	display: none;
}

.rbc-resultlist-scroll-container .rbc-resultlist .rbc-resultlist__title,
.rbc-resultlist-scroll-container .rbc-resultlist .rbc-resultlist__desc {
	padding: 0;
}

.rbc-resultlist-scroll-container .rbc-resultlist .rbc-resultlist__title .title {
	margin: 0 0 10px 0;
	display: inline-block;
	padding: 0;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.02em;
	color: #222;
	font-weight: normal;
	font-family: "Lato Regular";
}

.rbc-resultlist-scroll-container .rbc-resultlist .rbc-resultlist__title a.title {
	-webkit-transition: all .3s ease;
	transition: all .3s ease;
	border-bottom: 1px dotted transparent;
	margin-bottom: 9px;
}

.rbc-resultlist-scroll-container .rbc-resultlist .rbc-resultlist__title a.title:hover {
	color: #111;
	border-color: #111;
}

.rbc-resultlist-scroll-container .rbc-resultlist .text {
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.02em;
	color: #333;
	margin-bottom: 10px;
}

.rbc-resultlist-scroll-container .rbc-resultlist .info {
	padding: 0;
	margin: 0;
	font-size: 12px;
	color: #888;
	word-spacing: 0.1em;
}

.rbc-resultlist-scroll-container .rbc-resultlist .info a {
	color: #888;
	-webkit-transition: all .3s ease;
	transition: all .3s ease;
}

.rbc-resultlist-scroll-container .rbc-resultlist .info a:hover {
	color: #777;
	border-bottom: 1px dotted #999;
}

.rbc-resultlist-scroll-container .rbc-resultlist .info .separator {
	display: inline-block;
	margin: 0 5px;
}

.rbc-resultlist-scroll-container .rbc-resultlist p {
	margin: 0;
	line-height: 24px;
}`;
