module.exports = {
	'Show "My Life for Aiur" when "Show Text" button is clicked' : function (browser) {
		browser
			.url('http://localhost:9000/')
			.waitForElementVisible('body', 1000)
			// .setValue('input[type=text]', 'nightwatch')
			// .waitForElementVisible('button[name=btnG]', 1000)
			.click('button[id=button_vis_aiur_melding]')
			.pause(1000)
			.assert.containsText('#label_vis_aiur_melding', 'My Life for Aiur.')
			.end();
	}
};