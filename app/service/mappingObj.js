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
				"analyzer": "english"
			},
			"time": {
				"type": "integer"
			},
			"title": {
				"type": "string",
				"analyzer": "english"
			},
			"url": {
				"type": "string"
			}
		}
	}
};
