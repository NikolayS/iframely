module.exports = {

    re: /^https:\/\/(\w+\.)?app\.box\.com\/s\/([a-zA-Z0-9]+)/,

    mixins: ["*"],

    getLink: function(urlMatch) {

    	// docs are at https://developers.box.com/box-embed/
    	return {
    		href: urlMatch.length > 2 ? "https://" + urlMatch[1] + "app.box.com/embed_widget/s/" + urlMatch[2] : "https://app.box.com/embed_widget/s/" + urlMatch[1],
    		rel: [CONFIG.R.app, CONFIG.R.html5, CONFIG.R.ssl],
    		type: CONFIG.T.text_html,
    		"aspect-ratio": 500 / 400
    	}

    },

    tests: [{
        noFeeds: true
    }]
};