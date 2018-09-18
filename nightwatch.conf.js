const chromedriver = {
	'win32': './selenium/chromedriver-win32.exe',
	'win64': './selenium/chromedriver-win32.exe',
	'linux' : './node_modules/chromedriver/chromedriver/chromedriver',
	'mac' : './node_modules/chromedriver/lib/chromedriver/chromedriver'
};

module.exports = ((settings) =>  {
	const testData = settings.test_settings.default;
	console.warn("JEJEEEEEEE....");
	console.warn(process.platform);
	settings.selenium.cli_args['webdriver.chrome.driver'] = chromedriver[process.platform];

	return settings;

})(require('./nightwatch.json'));
