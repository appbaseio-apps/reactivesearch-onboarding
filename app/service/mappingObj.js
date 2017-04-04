export const mapping = {
	"post": {
		"properties": {
			"by": {
				"type": "string"
			},
			"id": {
				"type": "integer"
			},
			"p_type": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				}
			},
			"parent": {
				"type": "long"
			},
			"parts": {
				"type": "long"
			},
			"score": {
				"type": "integer"
			},
			"text": {
				"type": "string",
				"analyzer": "auto-suggest",
				"search_analyzer": "standard"
			},
			"time": {
				"type": "integer"
			},
			"title": {
				"type": "string",
				"analyzer": "auto-suggest",
				"search_analyzer": "standard"
			},
			"url": {
				"type": "string"
			}
		}
	}
};
